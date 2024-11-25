"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs"; // Importa el hook de Clerk para obtener el usuario
import Comidas from "./Comidas";
import "./Desayuno.css";

function Comidas1() {
  const [comidas, setComidas] = useState([]);
  const { user } = useUser(); // Obtener el usuario autenticado desde Clerk

  useEffect(() => {
    const fetchData = async () => {
      if (!user || !user.emailAddresses || user.emailAddresses.length === 0) return;

      // Obtén el correo principal del usuario desde emailAddresses
      const correoUsuario = user.emailAddresses[0].emailAddress; // Accede al primer correo del arreglo

      const response = await fetch(
        "https://673629d5aafa2ef2222fb0a8.mockapi.io/pedido"
      );
      const data = await response.json();

      // Filtrar las comidas por el correo del usuario autenticado
      const comidasFiltradas = data.filter(
        (comida: any) => comida.correo === correoUsuario
      );
      setComidas(comidasFiltradas);
    };

    fetchData();
  }, [user]); // Dependencia en `user` para recargar cuando cambie

  return (
    <section>
      <div>
        {comidas.length > 0 ? (
          comidas.map((comida: any) => (
            <Comidas key={comida.id} comidas={comida} />
          ))
        ) : (
          <p>No hay comidas disponibles para este usuario.</p>
        )}
      </div>
    </section>
  );
}

export default Comidas1;
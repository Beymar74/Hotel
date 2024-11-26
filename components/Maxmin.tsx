"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useUser } from "@clerk/nextjs"; // Hook de Clerk para el usuario autenticado
import "./Maxmin.css";

type CantimaxminProps = {
  initialCantidad: number;
  data: {
    id: string;
    titulo: string;
    precio: number;
    plaimagen: string;
  };
};

const Cantimaxmin: React.FC<CantimaxminProps> = ({ initialCantidad, data }) => {
  const [cantidad, setCantidad] = useState<number>(initialCantidad);
  const { user } = useUser(); // Obtener datos del usuario autenticado
  const [loading, setLoading] = useState(false); // Estado de carga

  // Obtener nombre y correo del usuario autenticado
  const usern =
    user?.username ||
    user?.fullName ||
    `${user?.firstName} ${user?.lastName}` ||
    "Usuario desconocido";
  const email =
    user?.emailAddresses?.[0]?.emailAddress || "Correo no disponible";

  const aumentar = () => {
    if (cantidad < 10) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleConfirm = async () => {
    setLoading(true); // Mostrar estado de carga
    try {
      const payload = {
        platilloId: data.id,
        titulo: data.titulo,
        precio: data.precio,
        cantidad: cantidad,
        total: data.precio * cantidad,
        plaimagen: data.plaimagen,
        username: usern,
        correo: email,
      };

      console.log("Cuerpo enviado:", payload);

      const response = await fetch(
        "https://673629d5aafa2ef2222fb0a8.mockapi.io/pedido",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        alert("Pedido confirmado con éxito.");
      } else {
        alert("Hubo un problema al confirmar el pedido.");
      }
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
      alert("Error al procesar el pedido. Por favor, intenta nuevamente.");
    } finally {
      setLoading(false); // Ocultar estado de carga
    }
  };

  return (
    <section>
      <div className="blockmaxmin">
        <div className="opcnum">
          <h3 className="text">Cantidad</h3>
          <div className="maxmin">
            <button className="menos" onClick={disminuir}>
              <Image
                className="min"
                src="/menos.png"
                width={20}
                height={20}
                alt="Icono Menos"
              />
            </button>
            <h2 className="contador">{cantidad}</h2>
            <button className="mas" onClick={aumentar}>
              <Image
                className="max"
                src="/mas.png"
                width={20}
                height={20}
                alt="Icono Más"
              />
            </button>
          </div>
        </div>
      </div>
      <section className="section">
        <button className="cancelar" disabled={loading}>
          <span>Cancelar</span>
          <Image src="/cancel.png" width={20} height={20} alt="Cancelar" />
        </button>
        <button className="confirmar" onClick={handleConfirm} disabled={loading}>
          {loading ? (
            <span>Cargando...</span>
          ) : (
            <>
              <span>Confirmar</span>
              <Image src="/Carrito.png" width={20} height={20} alt="Carrito" />
            </>
          )}
        </button>
      </section>
    </section>
  );
};

export default Cantimaxmin;

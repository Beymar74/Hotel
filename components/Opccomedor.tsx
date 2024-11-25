import React, { useState } from "react";
import "./Opccomedor.css";
import Image from "next/image";

const Opccomedor = () => {
  // Estado que maneja el número de personas
  const [personas, setPersonas] = useState<number>(1);

  // Función para aumentar el número de personas
  const aumentar = () => {
    if (personas < 10) {
      setPersonas(personas + 1);
    }
  };

  // Función para disminuir el número de personas
  const disminuir = () => {
    if (personas > 1) {
      setPersonas(personas - 1);
    }
  };

  return (
    <section>
      <div className="coment">
        <h3>Si escogió Comedor llene lo siguiente</h3>
      </div>
      <div className="opcnum">
        <h3 className="text">#Personas</h3>
        <div className="maxmin">
          <button className="menos" onClick={disminuir}>
            <Image
              className="min"
              src="/menos.png"
              width={10}
              height={10}
              alt={"Icono Menos"}
            />
          </button>
          {/* Mostrar el número de personas */}
          <h2 className="contador">{personas}</h2>
          <button className="mas" onClick={aumentar}>
            <Image
              className="max"
              src="/mas.png"
              width={10}
              height={10}
              alt={"Icono Más"}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Opccomedor;

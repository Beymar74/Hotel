"use client";
import React, { useEffect, useState } from "react";
import "./Dia.css";

const Dia: React.FC = () => {
  const calcularFecha = () => {
    const hoy = new Date();
    return hoy.toISOString().split("T")[0];
  };

  const [fecha, setFecha] = useState(calcularFecha);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFecha(calcularFecha());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className=".fechas-container-simple"><div className="fecha-item">Hoy</div></div>;
};

export default Dia;





"use client";

import React from "react";
import Link from "next/link";
import "./Canconfi.css";

type CanconfiProps = {
  data: {
    id: string;
    titulo: string;
    precio: number;
    cantidad: number;
    plaimagen: string;
  };
};

const Canconfi: React.FC<CanconfiProps> = ({ data }) => {
  const handleConfirm = async () => {
    try {
      const response = await fetch("https://673629d5aafa2ef2222fb0a8.mockapi.io/pedido", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          platilloId: data.id,
          titulo: data.titulo,
          precio: data.precio,
          cantidad: data.cantidad,
          total: data.precio * data.cantidad,
        }),
      });

      if (response.ok) {
        alert("Pedido confirmado con éxito.");
      } else {
        alert("Hubo un problema al confirmar el pedido.");
      }
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
      alert("Error al procesar el pedido. Por favor, intenta nuevamente.");
    }
  };

  return (
    <section className="section">
      <button className="cancelar">
        <span>Cancelar</span>
        <img src="../cancel.png" alt="x" />
      </button>
      <button className="confirmar" onClick={handleConfirm}>
        <span>Confirmar</span>
        <img src="../Carrito.png" alt="R" />
      </button>
    </section>
  );
};

export default Canconfi;

import React from "react";
import "./Contipedido.css";
import Link from "next/link";

const Contipedido = () => {
  return (
    <div className="container">
      <div className="detalles">
        <div className="seccion">
          <h3>Descuento</h3>
          <h3>Total</h3>
        </div>
        <div className="seccion">
          <h3>Bs. 0</h3>
          <h3>Bs. 150</h3>
        </div>
      </div>
      <Link href={"/PantallaConfirmacion"} passHref>
        <div className="boton">
          <button className="continuar">Continuar el pedido</button>
        </div>
      </Link>
    </div>
  );
};

export default Contipedido;

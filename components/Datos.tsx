import React from "react";
import "./Datos.css";
import Link from "next/link";

const Datos = () => {
  return (
    <div className="subcaja">
      <div className="tit">
        <h2 className="titulo">Iniciar sesión o crear una cuenta</h2>
      </div>
      <form className="form1">
        <h1 className="tex">Email</h1>
        <input type="email" placeholder="ejemplo@dominio.com" />
        <h1 className="tex">Contraseña</h1>
        <input type="password" placeholder="Contraseña" />
      </form>
      <div className="iniciarSesion">
        <Link href={"/menuini"} passHref>
          <button className="button">Iniciar sesión</button>
        </Link>
      </div>
      <div className="olvidarContra">
        <Link href={"/acceso"} passHref>
          <h2 className="linksini">¿Olvidaste tu contraseña?</h2>
        </Link>
        <Link href={"/historial"} passHref>
          casa
        </Link>
        <Link href={"/Reserva"} passHref>
          casa2
        </Link>
      </div>
    </div>
  );
};

export default Datos;

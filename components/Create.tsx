import React from "react";
import "./Create.css";

const Create = () => {
  return (
    <div className="form">
      <form className="registro">
      <h2 className="titulo1">Crear una cuenta</h2>
        <h1 className="info">Nombre Completo</h1>
        <input type="text"  placeholder="Nombre Completo" />

        <h1 className="info">Email</h1>
        <input type="email"  placeholder="ejemplo@dominio.com" />

        <h1 className="info">Contraseña</h1>
        <input type="password"  placeholder="Contraseña" />

        <h1 className="info">Confirmar Contraseña</h1>
        <input
          type="password"
          
          placeholder="Confirmar Contraseña"
        />
      </form>
    </div>
  );
};

export default Create;

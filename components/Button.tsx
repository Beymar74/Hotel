import React from "react";
import Link from "next/link";
import "./Button.css";

const Button = () => {
  return (
    <div>
      <p className="terms">
        Al crear o utilizar una cuenta, usted acepta nuestros Términos de
        servicio y 
        <Link href={"/terminos"} passHref>
           Política de privacidad.
        </Link>
      </p>
      <Link href="/acceso" passHref>
        <button type="submit" className="submit-button">
          Crear Cuenta
        </button>
      </Link>

      <p className="login-link">¿Ya tienes una cuenta?</p>
      <Link href="/acceso" passHref className="acces">
        Acceso
      </Link>
    </div>
  );
};

export default Button;

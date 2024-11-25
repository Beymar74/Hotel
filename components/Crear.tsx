import React from "react";
import "./Crear.css";
import Link from "next/link";
import Image from "next/image";

const Crear = () => {
  return (
    <div>
      <div className="cuenta">
        <Link href={"/crear"} passHref>
          <button className="crear">Crear una cuenta</button>
        </Link>
      </div>
      <div className="ingresar">
        <Link href={"/acceso"} passHref>
          <button className="botoncini">
            <Image
              className="logini"
              src="/image 25.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
            <h2 className="textini">Continuar con Google</h2>
          </button>
        </Link>
        <Link href={"/acceso"} passHref>
          <button className="botoncini">
            <Image
              className="logini"
              src="/image 24.png"
              width={500}
              height={500}
              alt={"Logo Hotel Pairumani"}
            />
            <h2 className="textini">Continuar con Facebook</h2>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Crear;

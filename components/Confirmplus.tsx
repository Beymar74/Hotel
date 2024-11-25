import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Confplus.css";

const Confirm = () => {
  return (
    <div className="conteiner">
      <div className="text">
        <p className="confirm">Confirmacion</p>
        <p className="order">Order #19216811</p>
      </div>
      <Link href={"/acceso"} passHref>
        <button className="buttonmas">
          <Image
            className="plus"
            src="/Plus.png"
            width={20}
            height={20}
            alt={"Icono Mas"}
          />
        </button>
      </Link>
    </div>
  );
};

export default Confirm;

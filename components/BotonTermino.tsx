import React from "react";
import Link from "next/link";
import "./BotonTermino.css";
const BotonTermino = () => {
  return (
    <div>
      <Link href={"/crear"} passHref>
        <button type="submit" className="submit-button">
          Volver
        </button>
      </Link>
    </div>
  );
};

export default BotonTermino;

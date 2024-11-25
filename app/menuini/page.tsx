import React from "react";
import Header3 from "../../components/Header3";
import "./layoutmenu.css";
import Image from "next/image";
import Desayuno from "../../components/Desayuno"
import Almuerzo from "../../components/Almuerzo"
import Cena from "../../components/Cena"

const MenuPage = () => {
  return (
    <div>
      <Header3 />
      <div className="card">
        <div className="logo">
          <Image className="logo"
            src="/logoP.png"
            width={500}
            height={500}
            alt={"Logo Hotel Pairumani"}
          />
          <h1 className="comida">Comidas</h1>
        </div>
      </div>
      <Desayuno/>
      <Almuerzo/>
      <Cena/>
    </div>
  );
};

export default MenuPage;

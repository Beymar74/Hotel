import React from "react";
import "./Header2.css";
import Image from "next/image";

const Header2 = () => {
  return (
    <div>
      <header>
        <div className="cont">
          <Image
            className="pairumani"
            src="/logoP.png"
            width={500}
            height={500}
            alt={"Logo Hotel Pairumani"}
          />
          <h1 className="ini">Hotel Pairumani</h1>
        </div>
      </header>
    </div>
  );
};

export default Header2;

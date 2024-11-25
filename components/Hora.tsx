import React from "react";
import "./Hora.css"

const Hora = () => {
  return (
    <div className="horablock">
      <div className="grupi">
        <button className="buttonhora">17:00</button>
        <button className="buttonhora">17:30</button>
        <button className="buttonhora">18:00</button>
        <button className='buttonhora'>18:30</button>
      </div>
      <div className="grupii">
        <button className="buttonhora">19:00</button>
        <button className="buttonhora">19:30</button>
        <button className="buttonhora">20:00</button>
        <button className="buttonhora">20:30</button>
      </div>
    </div>
  );
};

export default Hora;
import React from "react";
import "./Plate.css";
import Link from "next/link";

interface PlateProps {
  plate: {
    id: string;
    name: string;
    plaimagen: string;
    precio: number;
  };
}

const Plate = ({ plate }: PlateProps) => {
  const { id, name, plaimagen, precio } = plate;
  return (
    <Link href={`/platillos/${id}`}>
      <div className="plate-container">
        <img src={plaimagen} alt={name} />
        <div className="plate-details">
          <h2>{name}</h2>
          <p>Bs. {precio}</p>
        </div>
      </div>
    </Link>
  );
};

export default Plate;
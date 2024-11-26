import React from "react";
import Image from "next/image";
import "./Resenas.css";

type Resena = {
  userid: number;
  coment: string;
  calificacion: string;
  nombre: string;
  perfimg: string;
};

type ResenasProps = {
  resenas: Resena[];
};

const Resenas = ({ resenas }: ResenasProps) => {
  return (
    <section className="blockresenas">
      <h1 className="title">Reseñas</h1>
      {resenas.length > 0 ? (
        resenas.map((resena, index) => {
          const calificacion = parseInt(resena.calificacion, 10);
          return (
            <div key={index} className="coment">
              <div className="perfil">
                <Image
                  className="plate"
                  src={resena.perfimg}
                  alt={`${resena.nombre} perfil`}
                  width={50}
                  height={50}
                />
              </div>
              <div className="comentario">
                <div className="estrellitas">
                  {Number.isNaN(calificacion)
                    ? null
                    : Array.from({ length: calificacion }).map((_, starIndex) => (
                        <Image
                          key={starIndex}
                          src="/star.png"
                          alt="*"
                          width={20}
                          height={20}
                        />
                      ))}
                </div>
                <p className="text">
                  <strong>{resena.nombre}:</strong> {resena.coment}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No hay reseñas disponibles.</p>
      )}
    </section>
  );
};

export default Resenas;

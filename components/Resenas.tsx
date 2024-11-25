import React from "react";
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
        resenas.map((resena, index) => (
          <div key={index} className="coment">
            <div className="perfil">
              <img className="plate" src={resena.perfimg} alt="" />
            </div>
            <div className="comentario">
              <div className="estrellitas">
                {/*Este es la condicion para las estrellas*/}
                {Array.from({ length: parseInt(resena.calificacion) }).map(
                  (_, starIndex) => (
                    <img key={starIndex} src="../star.png" alt="*" />
                  )
                )}
              </div>
              <p className="text">
                <strong>{resena.nombre}:</strong> {resena.coment}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>No hay reseñas disponibles.</p>
      )}
    </section>
  );
};

export default Resenas;

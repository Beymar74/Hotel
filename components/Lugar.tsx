// Lugar.tsx
import React from 'react';
import "./Lugar.css";

type LugarProps = {
  onComedorClick: () => void;
  onHabitacionClick: () => void;
};

const Lugar: React.FC<LugarProps> = ({ onComedorClick, onHabitacionClick }) => {
  return (
    <div className='conteiner'>  
      <h3 className='titulo'>Lugar</h3>
      <button className='habitacion' onClick={onHabitacionClick}>Habitación</button> {/* Añadimos onClick aquí */}
      <button className='comedor' onClick={onComedorClick}>Comedor</button> {/* Añadimos onClick aquí */}
    </div>
  );
};

export default Lugar;

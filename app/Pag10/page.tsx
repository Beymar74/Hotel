// ConfirmarPage.tsx
"use client"; 
import React, { useState } from 'react';
import Confirmplus from '@/components/Confirmplus';
import Head from '@/components/Head';
import Comidas1 from '@/components/Comidas1';
import Lugar from '@/components/Lugar';
import Opccomedor from '@/components/Opccomedor';
import Contipedido from '@/components/Contipedido';
import Hora from '@/components/Hora';
import { CalendarDemo } from '@/components/Calendari';

const ConfirmarPage = () => {
  const [mostrarOpcComedor, setMostrarOpcComedor] = useState(false);

  const handleComedorClick = () => {
    setMostrarOpcComedor(true);
  };

  const handleHabitacionClick = () => {
    setMostrarOpcComedor(false);
  };

  return (
    <div>
      <Head />
      <Confirmplus />
      <Comidas1 />
      <Lugar 
        onComedorClick={handleComedorClick} 
        onHabitacionClick={handleHabitacionClick} 
      />
      {mostrarOpcComedor && <Opccomedor />}
      <Hora />
      <CalendarDemo />
      <Contipedido />
    </div>
  );
};

export default ConfirmarPage;

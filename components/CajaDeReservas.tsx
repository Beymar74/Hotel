import React from 'react'
import FechaConhora from './FechaConHora'
import BotonVerDetalle from './BotonVerDetalle'
import './CajaDeReservas.css'
const CajaDeReservas = () => {
  return (
    <div className='cajadereservas'>
      <img src="./images/Vector - 0.png" alt="" className='ticket'/>
      <div>
      <FechaConhora/>
      <h1 className='comida'>Desayuno - Hotcakes</h1>
      </div>
      <BotonVerDetalle/>
    </div>
  )
}

export default CajaDeReservas

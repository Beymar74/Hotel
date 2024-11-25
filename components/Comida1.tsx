import React from 'react'
import Buttonrepetir from './Buttonrepetir'
import "./Comida1.css"
const Comida1 = () => {
  return (
    <div className='cuadro'>
        <img src="/images/comida2.png" alt="comida" className='ima' />
        
        <div>
        <h1 className='comid'> Hotckaes</h1>
        <h1 className='tema'>Desayuno</h1>
        <h1 className='tema'>Lunes 7:30</h1>  
        </div>
        <Buttonrepetir/>
    </div>
  )
}

export default Comida1

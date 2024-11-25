import React from 'react'
import Barr from '@/components/Barr'
import Misreser from '@/components/Misreser'
import Modif from '@/components/Modif'
import BarraModificarCancelar from '@/components/BarraModificarCancelar'
import CajaDeReservas from '@/components/CajaDeReservas'
const page = () => {
  return (
    <div>
      <Barr/>
      <Misreser/>
      <Modif/>
      <CajaDeReservas/>
      <BarraModificarCancelar/>

      
      
    </div>
  )
}

export default page

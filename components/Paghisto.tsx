import React from 'react'
import Barra from '@/components/Barra'
import Volver from '@/components/Volver'
import Dia from '@/components/Dia'
import Comida1 from '@/components/Comida1'
import Histo from '@/components/Histo'
const Paghisto = () => {
  return (
    <div className='pag'>
      <Barra/>
      <Histo/>
      <Dia/>
      <Comida1/>
      <Volver/>
    </div>
  )
}

export default Paghisto

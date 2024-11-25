import React from 'react'
import BotonModificar from './BotonModificar'
import BotonCancelar from './BotonCancelar'
import './BarraModificarCancelar.css'
const BarraModificarCancelar = () => {
  return (
    <div className='barramodificioncancelar'>
      <BotonModificar/>
      <BotonCancelar/>
    </div>
  )
}
export default BarraModificarCancelar

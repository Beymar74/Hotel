import React from 'react'
import "./Todolist.css"
import Enbuenah from './Enbuenah'
import CajaButton from './CajaButton'
const Todolist = () => {
  return (
    <div>
      <div className='pag'>
       <Enbuenah/>
       <p className="Todolisto">Todo listo. Te enviamos un correo de confirmación
       con los detalles y acceso a tu factura. </p>
       <CajaButton/>
    </div>
    </div>
  )
}

export default Todolist

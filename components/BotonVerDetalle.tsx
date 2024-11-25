import React from 'react'
import Link from 'next/link'
import './BotonVerDetalle.css'
const BotonVerDetalle = () => {
  return (
    <div>
      <Link className='botonverdetalles'href={"/#"} passHref>Ver Detalles</Link>
    </div>
  )
}

export default BotonVerDetalle

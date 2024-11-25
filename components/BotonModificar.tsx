import React from 'react'
import Link from 'next/link'
import "./BotonModificar.css"
const BotonModificar = () => {
  return (
    <div>
        <Link className="botonmodificar" href={"/#"} passHref>
          Modificar
        </Link>
    </div>
  )
}

export default BotonModificar

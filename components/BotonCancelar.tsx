import React from 'react'
import Link from 'next/link'
import './BotonCancelar.css'
const BotonCancelar = () => {
  return (
    <div>
        <Link className="botoncancelar" href={"/menuini"} passHref>
          Cancelar
        </Link>
    </div>
  )
}

export default BotonCancelar

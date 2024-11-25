import React from 'react'
import "./Buttonregreso.css"
import Link from 'next/link'

const Buttonregreso = () => {
  return (
    <div>
       <Link className="botonmodificar" href={"/menuini"} passHref>
          Regreso al inicio
        </Link>
    </div>
  )
}

export default Buttonregreso

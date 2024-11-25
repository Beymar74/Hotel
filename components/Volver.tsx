import React from 'react'
import "./Volver.css"
import Link from 'next/link'
const Volver = () => {
  return (
    <div className='al'>
        <div className='botones'>
            <Link className="texto" href={"#"} passHref>Volver Menu</Link>
        </div>
    </div>
  )
}

export default Volver

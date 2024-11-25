import React from 'react'
import Link from 'next/link'
import "./Buttonayuda.css"

const Buttonrayuda = () => {
  return (
    <div className='botonayuda'>
        <Link className="buttonayuda" href={""} passHref>
          Ayuda
        </Link>
    </div>
  )
}

export default Buttonrayuda
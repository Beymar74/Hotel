import React from 'react'
import Link from 'next/link'
import "./Atras.css"
const Atras = () => {
  return (
    <div>
        <Link className="atras" href={"#"} passHref>
            ← 
        </Link>  
    </div>
  )
}

export default Atras

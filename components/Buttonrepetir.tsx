import React from 'react'
import Link from 'next/link'
import "./Buttonregreso.css"
const Buttonrepetir = () => {
  return (
    
    <div>
      <div className="bot">
        <Link className="texto" href={"#"} passHref>
          Repetir pedido  
        </Link>
      </div> 
    </div>
  )
}

export default Buttonrepetir

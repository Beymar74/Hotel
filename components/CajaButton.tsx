import React from 'react'
import Buttonregreso from './Buttonregreso'
import Buttonrayuda from './Buttonayuda'
import "./CajaButton.css"
const CajaButton = () => {
  return (
    <div>
        <div className='caja'>
          <Buttonregreso/>
          <Buttonrayuda/>
        </div>
      
    </div>
  )
}

export default CajaButton

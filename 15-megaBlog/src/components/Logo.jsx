import React from 'react'
import images from '../images/original.png';
function Logo({width = '100px'}) {
  return (
    <div>
       <img 
        src={images} 
        alt="Logo" 
        width={width}
        style={{ height: '60px',width:'70px', borderRadius:'100%' }} 
      />
    </div>
  )
}

export default Logo
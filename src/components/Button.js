import React, { useState } from 'react'

function Button() {
    const [toggle, setToggle] = useState(false);
  return (
    <>
        <button onClick={()=>{
            setToggle(!toggle)
        }}></button>
    </>
  )
}

export default Button;
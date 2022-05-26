import React, {forwardRef, useImperativeHandle, useState } from 'react'
//child of ImperativeHandle Component
const Button = forwardRef((props, ref) => {
    //State in CHILD component
    const [toggle, setToggle] = useState(false);
    //passing a referance it will be able to be called by the parent comp.
    useImperativeHandle(ref, () => ({
        alterToggle(){
            setToggle(!toggle);
        }
    }));
  return (
    <>
        <button>Button From Child</button>
        {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
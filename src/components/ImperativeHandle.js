import React, {useRef} from 'react'
import Button from './Button';
//PARENT comp. of <Button />
function ImperativeHandle() {
//can reference child state and change it onClick
    const buttonRef = useRef(null);
  return (
    <div>
        <button onClick={()=>{
            buttonRef.current.alterToggle();
        }}>Button From Parent</button>
        <Button ref={buttonRef}/>
    </div>
    
  );
};

export default ImperativeHandle;
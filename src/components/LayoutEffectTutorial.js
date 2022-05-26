import React, { useLayoutEffect, useEffect, useRef } from 'react'

function LayoutEffectTutorial() {
    const inputRef = useRef(null); //reference to <inuput/>
    useLayoutEffect(() => {
//prints "Cristian" in console before changing its value #line12 to "HELLO"
      console.log(inputRef.current.value);
    }, []);
    //called before page render; before things are shown to user

    useEffect(()=>{
        inputRef.current.value = "HELLO";
    }, []);
    //called after page render; after things are shown to user

  return (
    <div className='App'>
        <input ref={inputRef} value="Cristian" style={{width: 400, height: 50}}/>
    </div>
  )
};

export default LayoutEffectTutorial;
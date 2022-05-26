import React, {useRef} from 'react'

function RefTutorial() {

  const inputRef = useRef(null);

  const onClick = () => {
    // inputRef.current.focus(); //when clicking button it focuses to input feild
    // inputRef.current.value = ""; //when clicking button it "clears" the input feild
  };

  return (
    <div>
        <h1>Cristian</h1>
        <input type="text" placeholder="Ex..." ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
};

export default RefTutorial;
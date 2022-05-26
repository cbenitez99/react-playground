// import  {useState} from "react";
import './App.css'
import ContextTutorial from './components/ContextFolder/ContextTutorial';
import ImperativeHandle from './components/ImperativeHandleFolder/ImperativeHandle';
// import LayoutEffectTutorial from './components/LayUseEffect/LayoutEffectTutorial';
// import EffectTutorial from "./components/LayUseEffect/EffectTutorial";
// import RefTutorial from './components/RefTutorial';
// import Profile from "./components/Profile";
// import ReducerTutorial from "./components/ReducerTutorial";


//Functional component -> function that returns something
//Recieves input(props)then gives back output(JSX)
function App() {
  //cant go under 0 or greater than 10
  // const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //     setCounter(counter + 1)
  // };

  // const handleDecrement = () => {
  //     setCounter(counter - 1)
  // };

  // const handleIncrementTens = () => {
  //   setCounter(counter + 10)
  // };
  // const handleDecrementTens = () => {
  //   setCounter(counter - 10)
  // };


  return (
    <div>
      {/* <h1 className="cymag-text">Counter App</h1>
      <div>
        <p className="cymag-text">Counter : {counter}</p>
        <button className="cymag-text" onClick={handleIncrement}>Increase</button>
        <button className="cymag-text"onClick={handleDecrement}>Decrease</button>
        <hr/>
        <button className="cymag-text"onClick={handleIncrementTens}>+10</button>
        <button className="cymag-text"onClick={handleDecrementTens}>-10</button>
        <Profile/> */}
        {/* <ReducerTutorial/> */}
      {/* </div> */}
      {/* <EffectTutorial/> */}
      {/* <RefTutorial/> */}
      {/* <LayoutEffectTutorial/> */}
      {/* <ImperativeHandle/> */}
      <ContextTutorial/>
    </div>
  );
}

export default App;
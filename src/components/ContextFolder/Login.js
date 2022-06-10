import React, {useContext} from 'react'
import { AppContext } from './ContextTutorial';
//importing the exported createContext() variable name AppContext.

function Login() {
  const {setUsername} = useContext(AppContext);
  //, and it's current data {destructured} from ContextTutorial (Parent component).
  return (
    <div>
        <input onChange={(event) => {
            setUsername(event.target.value);
        }}/>
    </div>
  )
};

export default Login;
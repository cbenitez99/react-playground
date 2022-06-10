import React, {useState, createContext } from 'react';
import Login from './Login';
import User from './User';
//creating context with createContext() hook; available to everything in <Provider/>
export const AppContext = createContext(null);

function ContextTutorial() {
    const [username, setUsername] = useState("");

  return (
    //passing STATE data to the value, which is accessable to Login and User.
    <AppContext.Provider value={{username, setUsername}}>
        <Login/> <User/>
    </AppContext.Provider>
  );
};

export default ContextTutorial
import React, {useContext} from 'react'
import {AppContext} from './ContextTutorial'
//importing the exported createContext() variable name AppContext.

function User() {
  const {username} = useContext(AppContext)
  //, and it's current data {destructured} from ContextTutorial (Parent component).
  return (
    <div>
        <h1>User: {username}</h1>
    </div>
  )
};

export default User
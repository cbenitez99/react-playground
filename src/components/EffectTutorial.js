import React, {useEffect, useState} from 'react'
import axios from 'axios'

function EffectTutorial() {
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((resp)=>{
            setData(resp.data[0].email)
        });
    });
    
  return (
    <div>Hello World: {data}</div>
  );
};

export default EffectTutorial;
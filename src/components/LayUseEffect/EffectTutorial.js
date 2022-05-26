import React, {useEffect, useState} from 'react'
import axios from 'axios'

function EffectTutorial() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((resp)=>{
            setData(resp.data[0].email)
            console.log("Api was called")
        });
    }, [count]);//useEffect called when count's state changes
    
  return (
    <div>
        Hello World 
        <h1>{data}</h1>
        <h2>{count}</h2>
        <button onClick={() => {
            setCount(count + 1)
        }}>
            Click
        </button>
    </div>
  );
};

export default EffectTutorial;
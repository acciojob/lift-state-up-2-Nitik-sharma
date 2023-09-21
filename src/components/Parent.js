import React, { useState } from 'react'
import "./Css.css";
import Child from './Child';
function Parent() {
    const [input,setInput]=useState("");
  return (
    <div className='parent'>
        <h1>Parent Componet</h1>
        {
            input && <p>{input}</p>
        }
        <Child setInput={setInput}/>
    </div>
  )
}

export default Parent
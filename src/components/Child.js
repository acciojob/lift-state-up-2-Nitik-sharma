import React from 'react'
import "./Css.css"
function Child({setInput}) {
  return (
    <div className='child'>
        <h1>Child Componet</h1>
        <input type='text' className='input' onChange={(e)=>setInput(e.target.value)}/>
    </div>
  )
}

export default Child
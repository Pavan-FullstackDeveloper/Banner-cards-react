import React from 'react'
import {useState} from "react"

import "./Card.css"

const Counter = () => {
    const [count,setCount]=useState(0)
   
   const Increase=()=>{
     if(count<290){
       setCount(count+20)
     }
   }

   const Decrease=()=>{
     if(count>0){
       setCount(count-20)
     }
   }

  return (
    <div className="bg">
        <h1 className="heading">The Button has been clicked <span className="counter">{count}</span> times</h1>
        <p className="para">Click the button to  increase the count</p>
        <div className="div2">
            <button className="button" onClick={Increase}>Increase Click Time!</button>
            <button className="button2" onClick={Decrease}>Decrese Click Time!</button>
        </div>
        
    </div>
  )
}

export default Counter
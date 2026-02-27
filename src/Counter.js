import React from 'react'
import {useState} from 'react'
import './Counter.css'
//hooks-useState for state management
//const state=0
//const [state,setState]=useState(initial value)


const Counter=()=>{
    const[count,setCount]=useState(1)
    function change() {
            setCount(!count)
            console.log(count)
    }
    
    return(
        <center>
        <div className='counter'>
         <h1>{count ? "true":"false"}</h1>
          <div className={count ?"box-white":"box-dark"}>
          </div>
         <button onClick={change} className='btn_Counter'>Dark/white</button>
        </div>
        </center>
    )
}
export default Counter
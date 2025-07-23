import React, { useState } from 'react'

const Usestate = () => {

    const [count,setCount]=useState(0)

    
const Increment = () => {
  setCount((prev) => prev + 1);
};

const Decrement = () => {
  setCount((prev) => {
    if (prev > 0) {
      return prev - 1;
    }
    return prev;  
  });
};

  return (
    <div>
         <button className="increase" onClick={Decrement}> - </button>
         <h>count is {count}</h>
       <button  className="decrease" onClick={Increment}> + </button>
    </div>
  )
}

export default Usestate
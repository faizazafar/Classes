import React from 'react'
import { useState , useEffect} from "react";

export const State = () => {
    let [count , setcount]= useState(0)
  const [car, setCar] = useState("white");
  const [myArray, updateMyArray] = useState([]);
  const onClick = () => {
  updateMyArray( arr => [...arr, `${arr.length}`]);
  console.log(myArray.length)
  }
    return (
        <div>
             <button onClick={()=> setcount(++count)}> 
      Counter
      </button>
      <button onClick={()=> setcount(0)}> 
      Reset
      </button>
      <p> {count}</p>

      <p> My room is in {car} colour</p>
      <button onClick={()=> setCar('Pink')}> 
      Change Colour
      </button>
       <br></br>
      <input type="button" onClick={ onClick } value="Update" />

        <div>{myArray.map( e =>
          <div>{ e }</div>
        )}
        </div>
        </div>
    )
}

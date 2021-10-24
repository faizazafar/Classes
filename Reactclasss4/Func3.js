import React ,  {useState} from 'react'

const Func3 = (props) => {
    
    const[num2 , setNum]= useState("Faiza")
    
    return (


        <div>
            <h1>{props.name}</h1>
            <h2>{num2}</h2>
            <button onClick={()=>setNum("Welcome")} className="btn">Click me</button>
            
        </div>
    )
}

export default Func3

// state ko func me use krnyk lye hooks use hoty use for dynamic behavior 
// use keyword used in hooks
// useState variable and change krny ka functiom return 
// usestate jb use krte tou specfic portion change hota
// without callback se wo br br func ko call krta tou control krny k lye call back func k sth hota onclick pe we can change background etc 
// API is endpoint hit jiska response (data) hm lete xzeox gives layer of security better than fetch
// to check if pckg is install check package.json
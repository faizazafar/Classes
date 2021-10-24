import React, {useState} from 'react'

const Room = () => {

    const [islit , setlit] = useState(true)
    let [num , setnum] = useState(0)
    let [temp , settemp] = useState(30)


    const myclass = islit ? "lit" : "dark"
    // const mytemp = temp ? "increasetemp" : "decreasetemp"

    return (
        <div className={`${myclass}`}>
            The room is {islit ? "bright" :"dark "}
            <button onClick={()=>setlit(!islit)}>Switch</button>
            Num is {num}
            <button onClick={()=>setnum(++num)} className="btn">+</button>
            <button onClick={()=>setnum(--num)} className="btn">-</button>
            <br></br>
            <button onClick={()=>settemp(++temp) } >+</button>
            <button onClick={()=>settemp(--temp)} >-</button>
            Temperature is {temp}
            


        </div>
    )
}

export default Room

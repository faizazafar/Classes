import React from 'react'
import { useSelector } from 'react-redux'

// export const Counterdisplay = ({counter}) => {
export const Counterdisplay = () => {

    const counter = useSelector((state)=> state.counter)
    const name = useSelector((state)=> state.str)
    const add = useSelector((state)=> state.data)

    console.log(name)

    console.log(counter)

console.log(add)
    // console.log(state)
    return (
        <div>
            <h3>counter ={counter}</h3>
            <h3>name = {name }</h3>
           
            <h3> items = {add}</h3>
        </div>
    )
}

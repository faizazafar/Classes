import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  inc , dec , changename , additem} from './store/actions'

// export const CounterInput = ({setcounter , counter}) => {
export const CounterInput = () => {

    const counter  = useSelector((state)=> state.counter)
    const dispatch = useDispatch()

    return (
        <div>
            {/* <button onClick={()=>setcounter(counter+1)}>+</button>
            <button onClick={()=>setcounter(counter-1)}>-</button> */}
            <button onClick={ ()=> dispatch(inc())}>+</button>
            <button onClick={()=> dispatch(dec())}>-</button>
            <button onClick={()=> dispatch(changename())}>Change name</button>
            <button onClick={()=> dispatch(additem())}>Add item</button>


        </div>
    )
}

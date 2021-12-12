import React from 'react'

const initialstate ={

    counter : 0,
    data :['hi'],
    str: "redux class"
}

const newarray = ['yes']
function myreducer (state = initialstate , action)
{
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state, 
                // baqi state wese hi rehny do
                counter : state.counter+1,

            }
        case "DECREMENT":
                return {
                    ...state,
                    counter : state.counter-1,
    
                }
        case "UPDATE":
                return {
                    ...state,
                    str : state.str='faiza',
    
                }
        case "ADD":
                return {
                    ...state,
                    data : [...state.data , newarray]
    
                }

    
        default:
            return state;
    }
}

export default myreducer;
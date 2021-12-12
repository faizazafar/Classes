import React from 'react'

export function inc () {
    return {
        type : "INCREMENT"
    }
}

export const dec = () => (

    { type :"DECREMENT"}
)
export const changename = () => (

    { type :"UPDATE"}
)
export const additem = () => (

    { type :"ADD"}
)
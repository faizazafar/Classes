import React from 'react'

import { useSelector } from 'react-redux'

export const BookList = () => {

    const books = useSelector(state => state.books)
    return (
        <div>
            { 

            // books && books.map
            books && books.map((item)=>{
                return (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                </div>
                )
            })}

        </div>
    )
}

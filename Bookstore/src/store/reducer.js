import React from 'react'

const initialstate ={

    books : [
        { id :1 , title:"harry potter" , price : 500 }, 
        { id :2 , title:"harry potter2" , price : 800 }
    ]
}
const reducer = (state  = initialstate, action) => {
  switch (action.type) {
      case "LIST":
          return state.books
      case "ADDBOOK":
          console.log(action.payload)
          const newBook = []
          newBook.push(action.payload)
          return {
              ...state,
              books:[...state.books , ...newBook]
          }
  
      default:
          return state
  }
    // reducer state leta ha action letaa h


}

export default reducer

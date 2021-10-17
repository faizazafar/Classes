import React from 'react'
import State from './components/State'
import pic from './flower.jpg'

export const App = (props) => {

  console.log(props)
  return (
    <div>
      {/* <State></State> */}
      <h3>{`Hi ${props.name}`}</h3>
      <h3>{`your email is ${props.email}`}</h3>
      <h3>{`your rollno is ${props.rollno}`}</h3>

      <img src={pic} width></img>




    </div>
  )
}

export default App

// functional component me state nh bnti , hooks k zarye state bnti only

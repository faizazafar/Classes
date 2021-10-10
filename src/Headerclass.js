import React, { Component } from 'react'

export default class Headerclass extends Component {
    render() 
    {

        this.state = {
             name : `faiza`,
             degree:1,
             skills:['react', 'aws']

        }
        
        return (

            <>

        
            
            {/* <nav>
               <ul>
                   <li>
                       <a href="">Home</a>
                   </li>
                   <li>
                       <a href="">About </a>
                   </li>
                   <li>
                       <a href="">Service</a>
                   </li>
                   <li>
                       <a href="">Contact</a>
                   </li>
               </ul>
            </nav> */}

            {this.state.skills.map((item)=>(

                <>
                <p>{item}</p>
                <hr></hr>
                </>
            ))}

</>
        )

    }
}

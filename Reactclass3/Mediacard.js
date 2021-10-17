import React from 'react'

const Mediacard = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <img src={props.img} width={150} height={150}></img>
        </div>
    )
}

export default Mediacard

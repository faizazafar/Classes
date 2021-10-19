import React from 'react'

const Mediacrad = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
            <img src={props.imageUrl} width={350} height={150}></img>
        </div>
    )
}

export default Mediacrad

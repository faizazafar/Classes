import React from 'react'

const Gate = (props) => {
    return (
        <div>
            {props.cond ? (<b>open</b>) : 'close'}
        </div>
    )
}

export default Gate

import React from 'react'

const Gate = (props) => {

    const open = props.cond
    return (
        <div>
            {props.cond ? (<b>open</b>) : 'close'}
            {/* (<b>open</b>) JSX */}

        </div>
    )
}

export default Gate

import React, { useEffect, useState } from 'react'
import {axios} from 'axios'

const Post = () => {

    // const [state , setstate ] = useState()
    // useEffect(callback, ktnibaarkrnaha [] , jb jb state change ho [state])

    let [state, setstate] = useState(0)

    useEffect(()=>{

        document.title= state
    } , [state] )

    // axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{

    //     console.log(res.data)
    // })
    return (
        <div>
                        <button onClick={()=>setstate(++state) } >change</button>

        </div>
    )
}

export default Post 

// useffect
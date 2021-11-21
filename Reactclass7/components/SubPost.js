import React from 'react'
import { useParams } from 'react-router'
import {post} from '../data'

export const SubPost = () => {

    const{ id } = useParams();
    // url se lerhy that is why use param 
    const record = post.find((item) => item.id == id )
    return (
        <div>
         <h1>{record.title}</h1>
         <p>{record.dec}</p>
        </div>
    )
}

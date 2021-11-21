import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {post} from '../data'

export const Post = () => {

    // useffect(callback()=>{},[]) ik bar chalega
   // useffect(callback()=>{},[posts]) jb tk posts hoga tb tb chalega

   const [posts , setposts] = useState([])

   useEffect(() => {
    //    api call
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        const rec10 = data.slice(0,10)
        setposts(rec10)
    })

    // setTimeout(() => console.log('i am in use effect'), 2000);
   }, [])


    return (
        <div>
            {posts.map((item,index)=>(

                <li><Link to={`/posts/${item.id}`}>{item.title}</Link></li>
                // <li><Link to={`/${item.id}`}>{item.title}</Link></li>

                // changing url 
                
            ))}
        </div>
    )
}

// import 2 types k hoty ik default ik normal to without {} is k hoga when default se bheja jaye

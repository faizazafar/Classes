import { Button, MenuItem } from '@mui/material'
import React from 'react'
import {useEffect , useState} from 'react'
import axios from 'axios'

export const Homepage = () => {

    const [blogs, setblogs] = React.useState(
        [
            {id:1 ,title: 'hp' , desc:"sds" , author:"jk"},
            {id:1 ,title: 'hp' , desc:"sds" , author:"jk"},
            {id:1 ,title: 'hp' , desc:"sds" , author:"jk"},
        
        ]
    )

    const [name , setname] = useState('zAFAR')

    useEffect(()=>{
        console.log('i am in efect')
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res.data)
            setblogs(res.data)
        })
    },[])
    // ik bar run ho
    // useEffect(()=>{
    //     console.log('i am in efect')
    // },[name])
    // jb name chnage ho

    
    return (
        <div>
         {
             blogs.map((item,ind)=>(
                 <div key ={ind}>
                     {item.title}
                </div>
             ))
         }
         <button onClick={()=>setname('Faiza')}>Change</button>
        </div>
    )
}

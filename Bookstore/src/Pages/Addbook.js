import React, { useState } from 'react'
import { Form, FormGroup, FormLabel, FormControl, Control, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addbook } from '../store/actions'
export const Addbook = () => {

    const [title, settitle] = useState('')
    const [price, setprice] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log('sda')
        const result = { title , price};
        dispatch(addbook(result))
        // dispatch(addbook(payload))

        // return {type:"ADDBOOK" , payload}

    }

    console.log({ title })
    console.log({ price })
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Book Title</Form.Label>
                    <Form.Control onChange={(e) => settitle(e.target.value)} type="text" placeholder=" enter title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={(e) => setprice(e.target.value)} type="text" placeholder=" enter price" />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

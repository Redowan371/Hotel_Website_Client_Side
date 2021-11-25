import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import createEventPic from '../../images/Create event pic.jpg';

const CreateNewEvent = () => {
    const [newRooms, setNewRooms]=useState({})
    const handleName = (e) => {
        const newNames = { ...newRooms }
        newNames.name = e.target.value;
        setNewRooms(newNames)
    }
    const handleDescription = (e) => {
        const newDescription = { ...newRooms }
        newDescription.desc = e.target.value;
        setNewRooms(newDescription)
    }
    const handImgLink = (e) => {
        const newImg = { ...newRooms }
        newImg.img = e.target.value;
        setNewRooms(newImg)
    }
    const handlAmount = (e) => {
        const newAmount = { ...newRooms }
        newAmount.amount = e.target.value;
        setNewRooms(newAmount)
    }
    const handleRooms = (e) => {
        fetch('https://obscure-everglades-45396.herokuapp.com/rooms', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newRooms)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully Added new event')
                    setNewRooms({})
                }
            })

        e.preventDefault()
    }

    return (
        <div>
            <div className="container my-5">
                <div className="title">
                    <h1 className='text-center'>Create a <span>Event</span></h1>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <img className='w-100' src={createEventPic} alt="" />
                    </div>
                    <div className="col-md-5">
                        <Form onSubmit={handleRooms}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Room Name</Form.Label>
                                <Form.Control onChange={handleName} type="text" placeholder="room name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>description</Form.Label>
                                <Form.Control onChange={handleDescription} type="text" placeholder="description" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>imge link</Form.Label>
                                <Form.Control onChange={handImgLink} type="text" placeholder="image link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Amount</Form.Label>
                                <Form.Control onChange={handlAmount} type="text" placeholder="Amount" />
                            </Form.Group>
                            <Button className='book-btn' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateNewEvent;
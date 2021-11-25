import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './RoomBooking.css';

const RoomBooking = () => {
    const [details, setDetails] = useState({});
    const [bookings,setBookings]=useState({})
    const { user } = useAuth();
    const { id } = useParams();

    useEffect(() => {
        fetch('https://obscure-everglades-45396.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => {
                const selectedItm = data.find(item => item._id === id)
                setDetails(selectedItm)
            })
    }, [])

    
    const handleDate = e => {
        const newDate = { ...bookings }
        newDate.date = e.target.value;
        setBookings(newDate)
    }
    
    const handleRoomCat = e => {
        const newCat = { ...bookings }
        newCat.cat = e.target.value;
        setBookings(newCat)
    }
    const handleOrder = e => {
        const roomBooking = bookings;
        roomBooking.name = details.roomName;
        roomBooking.price = details.price;
        roomBooking.img = details.img;
        roomBooking.email = user.email;
        setBookings(roomBooking)
        fetch('https://obscure-everglades-45396.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Congratulations.Successfully Added The Order')
                    history.push(uri)
                    setBookings({})
                }
            })


        e.preventDefault()
    }
    const history = useHistory();
    const location = useLocation();
    const uri = '/myOrders';


    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 d-flex  align-items-center ">
                        <div>
                            <img className='w-100' src={details.img} alt="" />
                            <h4>  {details.roomName}</h4>
                            <p>  {details.descrip}</p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <Form onSubmit={handleOrder} className='roomFrom' >
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Room Name</Form.Label>
                                <Form.Control  value={details.roomName} type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Comfrim this Email</Form.Label>
                                <Form.Control value={user.email} type="text" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control value={details.price} type="number" placeholder="Price" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Date</Form.Label>
                                <Form.Control onChange={handleDate} type="nubmer" placeholder="Date" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Room Category</Form.Label>
                                <Form.Control value={details.roomType} onChange={handleRoomCat} type="text" placeholder="Room Category" />
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

export default RoomBooking;
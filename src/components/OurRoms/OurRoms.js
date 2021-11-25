import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './OurRooms.css';

const OurRoms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch(`https://obscure-everglades-45396.herokuapp.com/rooms`)
            .then(res => res.json())
            .then(data=>setRooms(data))
    }, [])
    return (
        <div>
            <div className="title text-center my-5">
                <h1>Our <span>Rooms</span></h1>
                <div className="container my-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            rooms.map(room => <div className="col"
                            key={room._id}
                            >
                                <div className="card">
                                    <img style={{height:"300px"}} src={room.img} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{room.roomName}</h5>
                                        <p className="card-text">{room.descrip}</p>
                                        <p><strong>Price: ${room.price}/day</strong></p>
                                    </div>
                                    <Link to={`/roomBooking/${room._id}`}><Button className='book-btn' >Book Now</Button></Link>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurRoms;
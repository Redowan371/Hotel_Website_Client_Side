import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth()
    const mail = user.email;

    const [myOrder, setMyOrder] = useState([])

    useEffect(() => {
        fetch('https://obscure-everglades-45396.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const onlyMine = data.filter(mine => mine.email === mail)
                setMyOrder(onlyMine)
            })
    }, )
    const handleCancelledOrder = (id) => {
        const confrim = window.confirm('You want delete this item?')
        if (confrim) {
            fetch(`https://obscure-everglades-45396.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("delete Successfully")
                        const remainingUser = myOrder.filter(a => a._id !== id)
                        setMyOrder(remainingUser)
                    }
                })
        }

    }
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    {
                        myOrder.map(order => <div className="col-md-6">
                            <div className="card mb-3" style={{ "max-width": "540px" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={order?.img} className=" w-100" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Room Name:{ order.name}</h5>
                                            <p className="card-text">Date:{order.date }</p>
                                            <p className="card-text">Room Fee:{order.price }</p>
                                            <Button className='book-btn' onClick={()=>handleCancelledOrder(order._id)}>Cancelled</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    <div className='d-flex justify-content-center'>
                        <Link to='/placeOrder'> <button className='book-btn '>Place Order</button></Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
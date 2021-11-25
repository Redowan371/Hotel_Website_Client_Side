import React from 'react';
import { Link } from 'react-router-dom';
import congratu from '../images/download (1).jpg';
import './PlaceOrder.css';

const PlaceOrder = () => {
    return (
        <div className="main">
            <img className='not-img' src={congratu} alt="" />
            <div className='d-flex justify-content-center'>
                <Link to='/home'>
                    <button className='book-btn my-2'>Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default PlaceOrder;
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.gif';
import './PageNotFound.css';



const PageNotFound = () => {
    return (
        <div className="main">
            <img className='not-img' src={notFound} alt="" />
            <div className='d-flex justify-content-center'>
                <Link to='/home'>
                    <button className='book-btn my-2'>Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;
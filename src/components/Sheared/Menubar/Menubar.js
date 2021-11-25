import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import defaultPic from '../../../images/geust.png';
import './Menubar.css';


const Menubar = () => {
const {user,logOut}=useAuth();
    return (
        <div>
            <Navbar collapseOnSelect  expand="lg" bg="dark" variant="dark" className='px-3' >
                    <Navbar.Brand ><Link to='/home' className='logo'><div className='title'><span>Hotel</span> Tulip</div></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className='link-item' to="/home">Home</Link>
                            <Link className='link-item' to="/rooms">Our Rooms</Link>
                            {
                              user?.email &&  <div>
                                  <Link className='link-item' to="/MyOrders">MyOrders</Link>
                              <Link className='link-item' to="/createNewEvents">Create New Events</Link>
                              <Link className='link-item' to="/manageOrder">Manage Users</Link>
                              </div>

                            }
                            <Link className='link-item' to="/about">About</Link>
                            <Link className='link-item' to="/contact">Contact</Link>
                            {
                               user?.email ? <button className='log-btn' onClick={logOut}>Log Out</button> :
                               <Link className='link-item' to="/login">Login</Link>
                            }
                            {
                                user?.email? <div className='login-information'>
                                    {
                                        user.photoURL ? <img title={user.displayName} src={user.photoURL}alt="" />:
                                        <img title={user.displayName} src={defaultPic} alt="" />
                                    }
                                    </div> :<small>{''}</small>
                            }
                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
        </div>
    );
};

export default Menubar;
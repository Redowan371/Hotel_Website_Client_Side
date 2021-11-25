import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer pb-2'>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-3">
                        <div className="title">
                            <h1><span>Hotel</span> Tulip</h1>
                            <p>We support programs that create advancement opportunities for people.
                            </p>
                            <h6>Follow Us</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h4>Address</h4>
                        <h5>London</h5>
                        <span>Baker Street 223b London, CA 70413</span>
                        <p>Open: 9:30 AM 5:30PM</p>
                        <h5>New York</h5>
                        <span>477-463 Broadway, NY 10013</span>
                        <p>Open: 8:30 AM 4:30PM</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Contact us</h4>
                        <span>+44 (800) 456-37-11</span> <br />
                        <span>team@example.com</span><br /><br />
                        <span>+1 (810) 446-31-11</span>
                        <span>team2@example.com</span>
                    </div>
                    <div className="col-md-3 footer-input">
                        <h4>Stay in touch</h4>
                        <input type="email" placeholder='Your email' /><br /> <br />
                        <button className='footer-btn'>Subscribe</button>
                    </div>
                </div>

            </div>
            <hr />
            <small>This Website Created by Redowan</small>

        </div>
    );
};

export default Footer;
import React from 'react';
import './About.css'
import aboutImg from '../../images/about-img.jpg'
import aboutBed from '../../images/bed.png'
import aboutSalad from '../../images/salad.png'
import aboutCoffee from '../../images/coffee-cup.png'

const About = () => {
    return (
        <>
            <div className="title">
                <h1 className='text-center mt-5 text-uppercase'><span>About</span> Us</h1>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="about-text d-flex justify-content-center ">
                            <div>
                                <h1>Excellent service.</h1>
                                <p>As important as strategy is, we have to execute to win. Execution involves every employee and every relation we have with customers. We must operate quickly on problems, drive results, not just activities.</p>
                                <p>Read More</p>
                            </div>
                        </div>
                        <div className="about-description">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="about-service-img text-center my-5">
                                        <img className='w-25' src={aboutBed} alt="" />
                                    </div>
                                    <div className="about-service-text">
                                        <h4>Orthopedic beds</h4>
                                        <p className='text-justify'>Only live communication and scrupulous study of the nuances of the task.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="about-service-img text-center my-5">
                                        <img className='w-25' src={aboutSalad} alt="" />
                                    </div>
                                    <div className="about-service-text">
                                        <h4>Vegetarian cuisine</h4>
                                        <p>We support programs that create advancement opportunities for people.</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="about-service-img text-center my-5">
                                        <img className='w-25' src={aboutCoffee} alt="" />
                                    </div>
                                    <div className="about-service-text">
                                        <h4>Custom coffee</h4>
                                        <p>We are using our strengths to not only further work in our own operations.</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <img className='w-100 h-100' src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
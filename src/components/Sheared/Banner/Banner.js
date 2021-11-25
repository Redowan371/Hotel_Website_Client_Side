import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
// import banner_1 from '../../../images/banner-1.jpg'
// import banner_2 from '../../../images/banner-2.jpg'
// import banner_3 from '../../../images/banner-3.jpg'

const Banner = () => {
    return (
        <div>
            {/* Header Banner Section Start */}
            <Carousel>
                <Carousel.Item className='cs-bg-1'>
                    <Carousel.Caption>
                        <div className="carouser-text">
                            <h3>Art of City Hotel</h3>
                            <p>World-famous, deeply relaxing. Quality in <br />everything we do.</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='cs-bg-2'>
                    <Carousel.Caption>
                        <h3>Enjoy The Nature</h3>
                        <p>World-famous, deeply relaxing. Quality in <br />everything we do.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='cs-bg-3'>
                    <Carousel.Caption>
                        <h3>Art Apartments.</h3>
                        <p>World-famous, deeply relaxing. Quality in <br />everything we do.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* Header Banner Section End */}
        </div>
    );
};

export default Banner;
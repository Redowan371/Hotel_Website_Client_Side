import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import OurRoms from '../OurRoms/OurRoms';
import Footer from '../Sheared/Footer';


const Home = () => {
    return (
        <div>
            <OurRoms></OurRoms>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
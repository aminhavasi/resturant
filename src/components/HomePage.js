import React from 'react';
import Navbar from './common/Navbar';
import Jumbotron from './jumbotron';
import Description from './description';
import Menu from './menu';
import Footer from './common/footer';
import Salon from './salon';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <div className="container">
                <Description />
                <Menu />
                <Salon />
            </div>

            <Footer />
        </div>
    );
};
export default HomePage;

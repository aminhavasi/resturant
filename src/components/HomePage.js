import React from 'react';
import Navbar from './common/Navbar';
import Jumbotron from './homePage/jumbotron';
import Description from './homePage/description';
import Menu from './homePage/menu';
import Footer from './common/footer';
import Salon from './homePage/salon';

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

import React from 'react';
import Navbar from './common/Navbar';
import Jumbotron from './jumbotron';
import Description from './description';
import Menu from './menu';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <div className="container">
                <Description />
                <Menu />
            </div>
        </div>
    );
};
export default HomePage;

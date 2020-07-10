import React from 'react';
const Salon = () => {
    return (
        <div id="demo" className="carousel slide mx-auto " data-ride="carousel">
            <h1 className="text-center mb-3 ">Salons</h1>
            <ul className="carousel-indicators">
                <li
                    data-target="#demo"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={require('../../img/salon1.jpg')}
                        alt="Los Angeles"
                        width="1100"
                        height="500"
                    />
                    <div className="carousel-caption">
                        <h3>Main Salon</h3>
                        <p>Best Plase for time with family</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={require('../../img/salon2.jpg')}
                        alt="Chicago"
                        width="1100"
                        height="500"
                    />
                    <div className="carousel-caption">
                        <h3>Love Salon</h3>
                        <p>Ready for Love Date</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={require('../../img/salon3.jpg')}
                        alt="New York"
                        width="1100"
                        height="500"
                    />
                    <div className="carousel-caption">
                        <h3>Work Salon</h3>
                        <p>Work Salon for job Date with bussines mans</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    );
};

export default Salon;

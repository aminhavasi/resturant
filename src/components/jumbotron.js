import React from 'react';

const Jumbotron = () => {
    return (
        <div className="conatainr-custom">
            {' '}
            <div
                id="section-top"
                className="jumbotron jumbotron-fluid  text-white d-flex  justify-content-center aligin-items-center"
                style={{ paddingTop: '5rem' }}
            >
                <div className="container text-center">
                    <h1 className="display-4 text-white  text-uppercase">
                        Welcome to pau resturant
                    </h1>
                    <div className="social">
                        <a
                            href="https://instagram.com"
                            className="btn btn-lg btn-primary m-1"
                        >
                            <i className="fa fa-instagram">Instagram</i>
                        </a>
                        <a
                            href="https://twitter.com"
                            className="btn btn-lg btn-primary "
                        >
                            <i className="fa fa-twitter">twitter</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;

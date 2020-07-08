import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md bg-primary navbar-dark fixed-top">
                <div className="navbarLogo">
                    <img src={require('./../../img/logo.png')} />
                    <p className="navbar-brand " href="#">
                        Resturant
                    </p>
                </div>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navabrNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navabrNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="#section-top" className="nav-link">
                                Top page
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#section-description"
                                className="nav-link"
                            >
                                Description
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#section-menu" className="nav-link">
                                menu
                            </Link>
                        </li>{' '}
                        <li className="nav-item">
                            <Link to="#section-posts" className="nav-link">
                                salon
                            </Link>
                        </li>{' '}
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;

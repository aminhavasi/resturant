import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        postCount: '',
        courseCount: '',
    };

    async componentDidMount() {}

    render() {
        return (
            <nav className="rtl navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                    hello amin
                </a>
                <p className="mt-2" style={{ color: 'white' }}>
                    food menu Count:
                    <span className="badge badge-warning badge-pill m-1">
                        12
                    </span>
                </p>
                <p className="mt-2" style={{ color: 'white' }}>
                    deser menu count:
                    <span className="badge badge-warning badge-pill m-1">
                        14
                    </span>
                </p>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link className="nav-link" to="/admin/logout">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;

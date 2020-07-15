import React, { Component } from 'react';
import getAdminNavLinks from '../../service/adminNavLinks';

class Sidebar extends Component {
    render() {
        const adminNavLinks = getAdminNavLinks();
        return (
            <nav className="col-md-2 d-none d-md-block bg-dark sidebar ">
                asdssssssss sdssssssss sdssssssss sdssssssss sdssssssss
                sdssssssss sdssssssss
            </nav>
        );
    }
}

export default Sidebar;

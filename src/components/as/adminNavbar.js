import React from 'react';
const AdminNavbar = () => {
    return (
        <nav className="navbar   bg-dark fixed-top adminNavbar">
            <div className="lead">Welcome to Admin Page Amin Havasi</div>
            <div
                className=" col-lg-4 d-flex flex lead"
                style={{ justifyContent: 'space-between' }}
            >
                <span>
                    <span className="mr-1">food:</span>
                    <span className="badge badge-pill text-dark bg-light">
                        12
                    </span>
                </span>
                <span>
                    <span className="mr-1">drink:</span>
                    <span className="badge badge-pill text-dark bg-light">
                        12
                    </span>
                </span>
                <span>
                    <span className="mr-1">deser:</span>
                    <span className="badge badge-pill text-dark bg-light">
                        12
                    </span>
                </span>
            </div>
        </nav>
    );
};

export default AdminNavbar;

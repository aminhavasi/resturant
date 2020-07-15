import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './style.css';

import 'react-toastify/dist/ReactToastify.css';

const Dasboard = () => {
    return (
        <div className="container-fluid rtl">
            <ToastContainer />
            <Navbar />
            <div className="row">
                <Sidebar />
                <main
                    role="main"
                    className="col-md-9 ml-sm-auto col-lg-10 px-4"
                >
                    <Switch>
                        <Route path="/admin/logout" component={null} />
                    </Switch>
                </main>
            </div>
        </div>
    );
};
export default Dasboard;

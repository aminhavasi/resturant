import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './style.css';

import 'react-toastify/dist/ReactToastify.css';
import AdminFood from './allFoods';
import AdminDrink from './allDrinks';
import AdminDeser from './allDeser';

const Dasboard = () => {
    return (
        <div className="container-fluid rtl">
            <ToastContainer />
            <Navbar />
            <div className="row">
                <Sidebar />
                <main
                    id="mainAdmin"
                    role="main"
                    className="col-md-9 mr-sm-auto mt-5 col-lg-10 px-4"
                >
                    <Switch>
                        <Route path="/admin/foods" component={AdminFood} />
                        <Route path="/admin/deser" component={AdminDeser} />

                        <Route path="/admin/drinks" component={AdminDrink} />
                    </Switch>
                </main>
            </div>
        </div>
    );
};
export default Dasboard;

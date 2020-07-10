import React from 'react';
import Footer from '../common/footer';
import { Link } from 'react-router-dom';
import foodMenu from '../../server/foodMenu';
const FoodMenu = () => {
    const menu = foodMenu();
    return (
        <React.Fragment>
            <Link className="btn btn-success btn-sm text-white m-1 p-2" to="/">
                back to home
            </Link>
            <div className="container container-fluid">
                <h2>Food Menu Page</h2>
                <p>
                    Reprehenderit laborum id dolor duis amet pariatur.
                    Incididunt aliquip irure commodo culpa eiusmod sit sit
                    fugiat laborum esse cupidatat aliqua cillum. Ex ut id id
                    excepteur irure laboris tempor in fugiat pariatur fugiat ut.
                    Ut commodo cupidatat commodo dolor nostrud sint culpa ad eu
                    ipsum Lorem et magna.
                </p>
                <div className="table-responsive">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th>No</th>
                                <th>Name food</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menu.map((m) => (
                                <tr className="foodMenuTable" key={m.id}>
                                    <td>{m.id}</td>
                                    <td>{m.name}</td>
                                    <td>${m.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default FoodMenu;

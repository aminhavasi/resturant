import React, { useState, useEffect } from 'react';
import Footer from '../common/footer';
import { Link } from 'react-router-dom';
import foodMenu from '../../server/drinkMenu';
import { menu as httpMenu } from '../../service/httpmenu';
const DrinkMenu = () => {
    const [drink, setDrink] = useState([]);
    useEffect(() => {
        httpMenu().then((res) => {
            setDrink(res.data);
        });
    });
    const menu = foodMenu();
    const data = drink;
    let numId = 1;
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
                            {data.length > 0
                                ? data.map((m) =>
                                      m.cat === 'drink' ? (
                                          <tr
                                              className="foodMenuTable"
                                              key={m._id}
                                          >
                                              <td>{numId++}</td>
                                              <td>{m.name}</td>
                                              <td>${m.price}</td>
                                          </tr>
                                      ) : null
                                  )
                                : null}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default DrinkMenu;

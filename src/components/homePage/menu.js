import React from 'react';
import menu from '../../server/fakeMenu';
import { Link } from 'react-router-dom';

const Menu = () => {
    const mainMenu = menu();
    return (
        <div className="mt-5 text-center">
            <h1>Menu</h1>
            <div id="section-menu" className=" row ">
                {mainMenu.map((m) => (
                    <div className="col-12 col-lg-3 col-md-4 col-sm-6 col-xs-12 menu bg-light shadow  mt-2 ">
                        <p className="lead">{m.cat}</p>
                        <img
                            src={
                                m.cat === 'food'
                                    ? require('../../img/f.jpeg')
                                    : m.cat === 'deser'
                                    ? require('../../img/desert.jpeg')
                                    : require('../../img/drink.jpg')
                            }
                            alt="img"
                            className="w-100"
                        />
                        <ul className="w-100 ">
                            {m.names.map((l) => (
                                <div>
                                    <li className=" mt-1 ">
                                        <div>
                                            <i
                                                className={
                                                    m.cat === 'food'
                                                        ? 'fa fa-cutlery mr-2'
                                                        : m.cat === 'deser'
                                                        ? 'fa fa-birthday-cake mr-2'
                                                        : 'fa fa-glass mr-2'
                                                }
                                            />
                                            {l}
                                        </div>
                                        <i className="fa fa-heartbeat text-success  enf" />
                                    </li>
                                    <hr />
                                </div>
                            ))}
                            <Link
                                to={m.link}
                                className={
                                    m.cat === 'food'
                                        ? 'btn btn-danger w-100'
                                        : m.cat === 'deser'
                                        ? 'btn btn-success w-100'
                                        : 'btn btn-primary w-100'
                                }
                            >
                                see more...
                            </Link>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Menu;

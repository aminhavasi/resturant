import React, { useEffect } from 'react';
import menu from './../server/fakeMenu';

const Menu = () => {
    const mainMenu = menu();
    return (
        <div className="mt-5 text-center">
            <h1>Menu</h1>
            <div id="section-menu" className=" row ">
                {mainMenu.map((m) => (
                    <div className="col-12 col-lg-3 col-md-4 col-sm-6 col-xs-12 menu bg-light shadow  mt-2 ">
                        <img src={require('../img/f.jpeg')} className="w-100" />
                        <ul className="w-100 ">
                            {m.names.map((l) => (
                                <div>
                                    <li className=" mt-1 ">
                                        <div>
                                            <i className="fa fa-glass mr-2" />
                                            {l}
                                        </div>
                                        <i className="fa fa-glass  enf" />
                                    </li>
                                    <hr />
                                </div>
                            ))}
                            <button
                                className={
                                    m.cat === 'food'
                                        ? 'btn btn-danger w-100'
                                        : m.cat === 'deser'
                                        ? 'btn btn-success w-100'
                                        : 'btn btn-primary w-100'
                                }
                            >
                                see more...
                            </button>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Menu;

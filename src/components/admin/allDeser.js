import React, { useState, useEffect } from 'react';
import { menu as httpMenu } from './../../service/httpmenu';

const AdminDeser = (props) => {
    const [food, setFood] = useState({});

    useEffect(() => {
        httpMenu().then((res) => {
            setFood(res.data);
        });
    }, []);
    const data = food;
    let numId = 1;
    const handleFood = (Id) => {
        console.log(Id);
        props.history.push('/');
    };
    return (
        <React.Fragment>
            <div className="shadow ">
                <div className="container container-fluid">
                    <h2>Deser Menu Page</h2>
                    <p>
                        Reprehenderit laborum id dolor duis amet pariatur.
                        Incididunt aliquip irure commodo culpa eiusmod sit sit
                        fugiat laborum esse cupidatat aliqua cillum. Ex ut id id
                        excepteur irure laboris tempor in fugiat pariatur fugiat
                        ut. Ut commodo cupidatat commodo dolor nostrud sint
                        culpa ad eu ipsum Lorem et magna.
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
                                          m.cat === 'deser' ? (
                                              <tr
                                                  onClick={() =>
                                                      handleFood(m._id)
                                                  }
                                                  className="foodMenuTableAdmin "
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
            </div>
        </React.Fragment>
    );
};

export default AdminDeser;

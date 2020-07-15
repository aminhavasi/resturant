import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../utils/actions/auth';
const SignUp = () => {
    const registerState = useSelector((state) => state.register);
    const dispatch = useDispatch();

    return (
        <div className="register">
            <Link style={{ marginTop: '1rem', marginLeft: '1rem' }} to="/">
                back to home
            </Link>
            <div className="register-body">
                <div className="card col-12 col-lg-6 text-center shadow ">
                    <p className="text-center mt-2 lead ">
                        Get started with your free account
                    </p>

                    <a href="/" className="btn btn-block btn-danger ">
                        {' '}
                        <i className="fa fa-google"></i>   Login via Google
                    </a>
                    <a href="/" className="btn btn-block btn-primary">
                        {' '}
                        <i className="fa fa-facebook-f"></i>   Login via
                        facebook
                    </a>

                    <div className="container pt-4">
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    {' '}
                                    <i className="fa fa-user"></i>{' '}
                                </span>
                            </div>
                            <input
                                className="form-control"
                                placeholder="Jhon Adamz"
                                type="text"
                                value={
                                    registerState.username
                                        ? registerState.username
                                        : ''
                                }
                                onChange={(e) =>
                                    dispatch(
                                        register(e.target.value, 'username')
                                    )
                                }
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text ">
                                    {' '}
                                    <i
                                        style={{ fontSize: '12px' }}
                                        className="fa fa-envelope
"
                                    ></i>{' '}
                                </span>
                            </div>
                            <input
                                className="form-control"
                                placeholder="Example@info.com"
                                type="email"
                                value={
                                    registerState.email
                                        ? registerState.email
                                        : ''
                                }
                                onChange={(e) =>
                                    dispatch(register(e.target.value, 'email'))
                                }
                            />
                        </div>{' '}
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    {' '}
                                    <i className="fa fa-lock"></i>{' '}
                                </span>
                            </div>
                            <input
                                className="form-control"
                                placeholder="********"
                                type="password"
                                value={
                                    registerState.password
                                        ? registerState.password
                                        : ''
                                }
                                onChange={(e) =>
                                    dispatch(
                                        register(e.target.value, 'password')
                                    )
                                }
                            />
                        </div>
                        <button className="btn btn-block btn-primary ">
                            SignUp
                        </button>
                        <div className="my-4">
                            <Link to="/login" className="mt-2 ">
                                Do you have an account?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

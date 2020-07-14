import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <React.Fragment>
            <Link to="/" className="ml-3  ">
                back to home
            </Link>
            <div className="login">
                <form className="card text-center shadow">
                    <div className="card card-body ">
                        <h3 className="mt-2">Sign in</h3>
                        <div className="mt-2">
                            <a className="m-1 bg-danger  text-white btn login-social">
                                <i
                                    className="fa fa-google-plus-square mr-1"
                                    aria-hidden="true"
                                    style={{ fontSize: '1.5rem' }}
                                ></i>
                                Sign in with google
                            </a>
                            <a className="m-1 bg-primary   text-white btn login-social">
                                <i
                                    className="fa fa-facebook-square mr-1 "
                                    style={{ fontSize: '1.2rem' }}
                                    aria-hidden="true"
                                ></i>
                                Sign in with facebook
                            </a>
                        </div>
                        <a style={{ fontWeight: 'bold' }}>or</a>
                        <input
                            className="form-control mt-3"
                            placeholder="Example@info.com"
                            type="email"
                            title="please enter a your email"
                        />
                        <input
                            className="form-control mt-3"
                            placeholder="********"
                            type="password"
                            title="please enter your password"
                        />
                        <button className="mt-3 btn btn-success ">
                            <i
                                className="fa fa-sign-in mr-1 "
                                aria-hidden="true"
                            ></i>
                            Sign in
                        </button>
                        <a href="/" className="text-left mt-2">
                            forgt password?
                        </a>
                        <Link
                            to="/signup"
                            className="mt-3 btn btn-primary text-white"
                        >
                            <i
                                className="fa fa-user-plus mr-1"
                                aria-hidden="true"
                            ></i>
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;

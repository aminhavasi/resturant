import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../utils/actions/auth';
import { login as httpLogin } from './../../service/httpLogin';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    const loginState = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const email = loginState.email;
            const password = loginState.password;
            if (email && password) {
                const res = await httpLogin(email, password);
                if (res.status === 400) {
                    toast.error('email or password is wrong');
                } else if (res.status === 200) {
                    await localStorage.setItem('token', res.headers['x-auth']);
                    props.history.replace('/admin');
                }
            } else {
                toast.warning('please fill fileds');
            }
        } catch (err) {
            toast.error('something went wrong');
        }
    };
    return (
        <React.Fragment>
            <ToastContainer />

            <Link to="/" className="ml-3  ">
                back to home
            </Link>
            <div className="login">
                <form
                    onSubmit={(e) => handleLogin(e)}
                    className="card text-center shadow"
                >
                    <div className="card card-body ">
                        <h3 className="mt-2">Sign in</h3>
                        <div className="mt-2">
                            <a
                                href="/"
                                className="m-1 bg-danger  text-white btn login-social"
                            >
                                <i
                                    className="fa fa-google-plus-square mr-1"
                                    aria-hidden="true"
                                    style={{ fontSize: '1.5rem' }}
                                ></i>
                                Sign in with google
                            </a>
                            <a
                                href="/"
                                className="m-1 bg-primary   text-white btn login-social"
                            >
                                <i
                                    className="fa fa-facebook-square mr-1 "
                                    style={{ fontSize: '1.2rem' }}
                                    aria-hidden="true"
                                ></i>
                                Sign in with facebook
                            </a>
                        </div>
                        <span style={{ fontWeight: 'bold' }}>or</span>
                        <input
                            className="form-control mt-3"
                            placeholder="Example@info.com"
                            type="email"
                            title="please enter a your email"
                            value={loginState.email ? loginState.email : ''}
                            onChange={(e) =>
                                dispatch(login(e.target.value, 'email'))
                            }
                        />
                        <input
                            className="form-control mt-3"
                            placeholder="********"
                            type="password"
                            title="please enter your password"
                            value={
                                loginState.password ? loginState.password : ''
                            }
                            onChange={(e) =>
                                dispatch(login(e.target.value, 'password'))
                            }
                        />
                        <button type="submit" className="mt-3 btn btn-success ">
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

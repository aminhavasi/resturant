import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer className="bg-light mt-5">
                <div className="container py-3 py-sm-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/">Whts's news</a>
                                </li>{' '}
                                <li>
                                    <a href="/">Support</a>
                                </li>{' '}
                                <li>
                                    <a href="/">My account</a>
                                </li>{' '}
                                <li>
                                    <a href="/">Cansel Subscription</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>informations</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">About us</a>
                                </li>
                                <li>
                                    <a href="/">Jobs</a>
                                </li>{' '}
                                <li>
                                    <a href="/">Press info</a>
                                </li>{' '}
                                <li>
                                    <a href="/">Contact</a>
                                </li>{' '}
                                <li>
                                    <a href="/">Parntship</a>
                                </li>
                            </ul>
                        </div>{' '}
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h3>Follow us</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">
                                        <i className="fa fa-facebook"></i>
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa fa-twitter"></i>Twitter
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="/">
                                        <i className="fa fa-instagram"></i>
                                        Instagram
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="/">
                                        <i className="fa fa-youtube"></i>Youtube
                                    </a>
                                </li>{' '}
                                <li>
                                    <a href="/">
                                        <i className="fa fa-linkedin">
                                            Linkedin
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <h6>Our Location:</h6>
                            <address>
                                <strong>Amin havasi</strong>
                                <br />
                                Iran,Qom,somaye Avenue
                                <br />
                                sh Alley,p125
                                <br />
                                <i className="fa fa-phone " aria-hidden="true">
                                    {' '}
                                </i>
                                <span className="sr-only">Telephone:</span>
                                <a href="tel:+989014289738">(98)9014289738</a>
                                <br />
                                <i className="fa fa-inbox " aria-hidden="true">
                                    {' '}
                                </i>
                                <span className="sr-only">Mail:</span>
                                <a href="pau.ahq@gmail.com">
                                    pau.ahq@gmail.com
                                </a>
                                <br />
                            </address>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;

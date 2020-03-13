import React, { Component } from 'react';
import Logo from './images/wanderlust.svg';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <header className="navHeader">
                    <div className="container-fluid p-0">
                        <nav className="navbar navbar-expand-lg">
                            <a className="navbar-brand" href="#">
                                <img className="LogoImage" src={Logo} alt="Logo"></img>
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="mr-auto"></div>
                                <div className="navbar-nav">

                                    <Link to="/" className="nav-item nav-link active">Home</Link>
                                    {/* <a className="nav-item nav-link active" href="#">
                                        Home <span className="sr-only">(current)</span>
                                    </a> */}
                                    <a className="nav-item nav-link" href="#about" data-testid="aboutNavbarBtn">
                                        About
                                    </a>
                                    <a className="nav-item nav-link" href="#price">
                                        Pricing
                                    </a>
                                    <a className="nav-item nav-link" href="#contact" tabindex="-1" aria-disabled="true">
                                        Testimonials
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}

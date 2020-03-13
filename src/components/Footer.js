import React, { Component } from 'react';
import Logo from './images/wanderlust.svg';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container-fluid padding">
                        <div className="row text-center">
                        <div className="col-12 social padding">
                                    <a href="#"><i class="fab fa-twitter"></i></a>
                                    <a href="#"><i class="fab fa-google-plus-g"></i></a>
                                    <a href="#"><i class="fab fa-facebook"></i></a>
                                    <a href="#"><i class="fab fa-youtube"></i></a>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                            <div className="col-md-4">
                                <img src={Logo} className="footerLogo" alt="Twitter Logo"></img>
                                <hr className="light"></hr>
                                <p>+49-`13498682878</p>
                                <p>hello.world@wonderlust.com</p>
                                <p>221B Baker Street</p>
                                <p>London, England, 65098</p>
                            </div>
                            
                            <div className="col-md-4">
                                <hr className="light"></hr>
                                <h5>Our Opening Hours</h5>
                                <hr className="light"></hr>
                                <p>Monday - Thursday : 9AM - 5PM</p>
                                <p>Friday : 9AM - 2PM</p>
                                <p>Saturday/Sunday : Closed</p>
                            </div>

                            <div className="col-md-4">
                                <hr className="light"></hr>
                                <h5>Our Office Locations</h5>
                                <hr className="light"></hr>
                                <p>Ulmenweg 67, 76865, Mannheim</p>
                                <p>221B Baker Street, 78364, London</p>
                                <p>Geranienweg, 73839, Munich</p>
                                <p>G4 - G8, 527282, Paris</p>
                            </div>

                                {/* <div className="col-md-4">
                                    <hr className="light"></hr>
                                    <h5>: www.wonderlust.com</h5>
                                    
                                </div> */}
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

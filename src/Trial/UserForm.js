import React, { Component } from 'react';
import './UserForm.css';
import Continent from './Continent';
import Countries from './Countries';
import Hotels from './Hotels';


export default class UserForm extends Component {

    state = {
        step: 1,
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    render() {
        const { step } = this.state;

        switch (step) {
            case 1:
                return (
                    <div>
                {/* Navigation Bar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="mr-auto"></div>
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                            <a className="nav-item nav-link" href="#">Features</a>
                            <a className="nav-item nav-link" href="#">Pricing</a>
                            <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </div>
                    </div>
                </nav>

                <form id="msform">
                    {/* progressbar */}
                    <ul id="progressbar">
                        <li className="active">Choose Continents</li>
                        <li>Choose Countries</li>
                        <li>Choose Hotel Types</li>
                        <li>Choose Optional Eventsn</li>
                    </ul>
                    {/* fieldsets */}
                    <Continent nextStep={this.nextStep} ></Continent>
                </form>
            </div>
                
                );
                break;
            case 2:
                return (
                <div>
                    {/* Navigation Bar */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="mr-auto"></div>
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="#">Features</a>
                                <a className="nav-item nav-link" href="#">Pricing</a>
                                <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </nav>
    
                    <form id="msform">
                        {/* progressbar */}
                        <ul id="progressbar">
                            <li className="active">Choose Continents</li>
                            <li>Choose Countries</li>
                            <li>Choose Hotel Types</li>
                        </ul>
                        {/* fieldsets */}
                        <Countries nextStep={this.nextStep} prevStep={this.prevStep}></Countries>
                    </form>
                </div> 
                    );
                    break;
            case 3:
                return (
                    <div>
                    {/* Navigation Bar */}
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="mr-auto"></div>
                            <div className="navbar-nav">
                                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                <a className="nav-item nav-link" href="#">Features</a>
                                <a className="nav-item nav-link" href="#">Pricing</a>
                                <a className="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </nav>
    
                    <form id="msform">
                        {/* progressbar */}
                        <ul id="progressbar">
                            <li className="active">Choose Continents</li>
                            <li>Choose Countries</li>
                            <li>Choose Hotel Types</li>
                        </ul>
                        {/* fieldsets */}
                        <Hotels nextStep={this.nextStep} prevStep={this.prevStep}></Hotels>
                    </form>
                </div> 
                    );
                    break;
                
                
            default:
                break;
        }
    }
}

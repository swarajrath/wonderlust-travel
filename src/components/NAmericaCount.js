import React, { Component } from 'react';
import PuertoRico from './flags/puerto-rico.svg';
import Bahamas from './flags/bahamas.svg';
import CostaRica from './flags/costa-rica.svg';
import Panama from './flags/panama.svg';
import Greenland from './flags/greenland.svg';
import Cuba from './flags/cuba.svg';
import Canada from './flags/canada.svg';
import USA from './flags/usa.svg';
import Mexico from './flags/mexico.svg';


export default class Countries extends Component {
    forword = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        
        return (
            <div>
                <fieldset>
                    <div className="container">
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={USA}></img></div>
                                <div className="name">USA</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Canada}  ></img></div>
                                <div className="name">Canada</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={PuertoRico}></img></div>
                                <div className="name">Puerto Rico</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={CostaRica}></img></div>
                                <div className="name">Costa Rica</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Cuba}></img></div>
                                <div className="name">Cuba</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner reddit">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Greenland}></img></div>
                                <div className="name">Greenland</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Panama}></img></div>
                                <div className="name">Panama</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Bahamas}></img></div>
                                <div className="name">Bahamas</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Mexico}></img></div>
                                <div className="name">Mexico</div>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>

        )
    }
}

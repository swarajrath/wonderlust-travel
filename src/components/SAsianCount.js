import React, { Component } from 'react';

import Cambodia from './flags/cambodia.svg';
import SouthKorea from './flags/south-korea.svg';
import Philippines from './flags/philippines.svg';
import Malaysia from './flags/malaysia.svg';
import Vietnam from './flags/vietnam.svg';
import Thailand from './flags/thailand.svg';
import Indonesia from './flags/indonesia.svg';



export default class SAsianCount extends Component {
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
                                <div className="icon"><img src={Cambodia}></img></div>
                                <div className="name">Cambodia</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Philippines}></img></div>
                                <div className="name">Philippines</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Malaysia}></img></div>
                                <div className="name">Malaysia</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Vietnam}></img></div>
                                <div className="name">Vietnam</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner reddit">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Thailand}></img></div>
                                <div className="name">Thailand</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner reddit">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={SouthKorea}></img></div>
                                <div className="name">South Korea</div>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>

        )
    }
}

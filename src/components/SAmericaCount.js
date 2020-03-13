import React, { Component } from 'react';
import Argentina from './flags/argentina.svg';
import Bolivia from './flags/bolivia.svg';
import Brazil from './flags/brazil.svg';
import Chile from './flags/chile.svg';
import Colombia from './flags/colombia.svg';
import Ecuador from './flags/ecuador.svg';
import Venezuela from './flags/venezuela.svg';
import Uruguay from './flags/uruguay.svg';
import Peru from './flags/peru.svg';
import Paraguay from './flags/paraguay.svg';


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
                                <div className="icon"><img src={Argentina}></img></div>
                                <div className="name">Argentina</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Brazil}  ></img></div>
                                <div className="name">Brazil</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Bolivia}></img></div>
                                <div className="name">Bolivia</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Colombia}></img></div>
                                <div className="name">Colombia</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Chile}></img></div>
                                <div className="name">Chile</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner reddit">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Venezuela}></img></div>
                                <div className="name">Venezuela</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Uruguay}></img></div>
                                <div className="name">Uruguay</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Ecuador}></img></div>
                                <div className="name">Ecuador</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Paraguay}></img></div>
                                <div className="name">Paraguay</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Peru}></img></div>
                                <div className="name">Peru</div>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>

        )
    }
}

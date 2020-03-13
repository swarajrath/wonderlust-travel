import React, { Component } from 'react';
import Germany from './flags/germany.svg';
import France from './flags/france.svg';
import Spain from './flags/spain.svg';
import Netherland from './flags/netherlands.svg';
import Switzerland from './flags/switzerland.svg';
import Italy from './flags/italy.svg';
import Portugal from './flags/portugal.svg';
import Luxembourg from './flags/luxembourg.svg';
import Poland from './flags/poland.svg';
import Austria from './flags/austria.svg';

export default class Countries extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: ""
        }

        this.checkChangeHandler = this.checkChangeHandler.bind(this)
    }
    
    checkChangeHandler = event => {
        console.log(event.target.value);
        // this.setState({
        //     value: event.target.value
        // });
        if (event.target.value) {
            sessionStorage.setItem("checkItems", event.target.value);
        }
    };


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
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Germany}></img></div>
                                <div className="name">Germany</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={France} value="France" onChange={this.checkChangeHandler} ></img></div>
                                <div className="name">France</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Spain} value="Spain" onChange={this.checkChangeHandler} ></img></div>
                                <div className="name">Spain</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Netherland} value="Netherlands" onChange={this.checkChangeHandler} ></img></div>
                                <div className="name">Netherland</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Luxembourg} value="Germany" onChange={this.checkChangeHandler} ></img></div>
                                <div className="name">Luxembourg</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox"/>
                            <div className="option_inner reddit">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Poland} value="Poland" onChange={this.checkChangeHandler} ></img></div>
                                <div className="name">Poland</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Austria}></img></div>
                                <div className="name">Austria</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Switzerland}></img></div>
                                <div className="name">Switzerland</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Portugal}></img></div>
                                <div className="name">Portugal</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" />
                            <div className="option_inner quora">
                                <div className="tickmark"></div>
                                <div className="icon"><img src={Italy}></img></div>
                                <div className="name">Italy</div>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>

        )
    }
}

import React, { Component } from 'react';
import Heidelberg from './images/Heidelberg.jpg';
import Oslo from './images/norway.jpg';
import Stockholm from './images/swedan.jpg';
import Helsinki from './images/finland.jpg';
import Paris from './images/paris.jpg';
import Hallstadt from './images/hallstadt.jpeg';
import Budapest from './images/budapest.jpg';
import Vienna from './images/vienna.jpg';

export default class Cities extends Component {

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
                                <div className="icon"><img className="cityicon" src={Heidelberg}></img></div>
                                <div className="name">Heidelberg</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Helsinki}></img></div>
                                <div className="name">Helsinki</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Oslo}></img></div>
                                <div className="name">Oslo</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Paris}></img></div>
                                <div className="name">Paris</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Stockholm}></img></div>
                                <div className="name">Stockholm</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Hallstadt}></img></div>
                                <div className="name">Hallstadt</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Budapest}></img></div>
                                <div className="name">Budapest</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Vienna}></img></div>
                                <div className="name">Vienna</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Heidelberg}></img></div>
                                <div className="name">Stuttgart</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Heidelberg}></img></div>
                                <div className="name">Munich</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Heidelberg}></img></div>
                                <div className="name">Berlin</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Heidelberg}></img></div>
                                <div className="name">Frankfurt</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Heidelberg}></img></div>
                                <div className="name">Salzburg</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Heidelberg}></img></div>
                                <div className="name">Bern</div>
                            </div>
                        </label>
                        <label className="option_item">
                            <input type="checkbox" className="checkbox" value="Germany" onChange={this.checkChangeHandler}/>
                            <div className="option_inner">
                                <div className="tickmark"></div>
                                <div className="icon"><img className="cityicon" src={Heidelberg}></img></div>
                                <div className="name">Interlaken</div>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </div>

        )
    }
}

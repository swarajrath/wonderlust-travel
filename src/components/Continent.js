import React, { Component } from "react";

export default class Continent extends Component {

    constructor(props){
        super(props)
        this.state = {
            value: ""
        }

        this.radioChangeHandler = this.radioChangeHandler.bind(this)
    }
    

    

    radioChangeHandler = event => {
        // console.log(event.target.value);
        // this.setState({
        //     value: event.target.value
        // });
        if (event.target.value) {
            sessionStorage.setItem("userItem", event.target.value);
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
                    <div class="input-container">
                        <input
                            type="radio"
                            name="continent"
                            value="asia"
                            id="asia"
                            onChange={this.radioChangeHandler} />
                        <label for="asia" className="labelContinent">
                            <i class="fas fa-globe-asia" aria-hidden="true"></i>
                            <span className="shortname">Asia</span>
                        </label>
                    </div>
                    <div class="input-container">
                        <input
                            type="radio"
                            name="continent"
                            value="europe"
                            id="europe"
                            onChange={this.radioChangeHandler}/>
                        <label for="europe" className="labelContinent">
                            <i class="fas fa-globe-europe" aria-hidden="true"></i>
                            <span className="shortname">Europe</span>
                        </label>
                    </div>
                    <div class="input-container">
                        <input
                            type="radio"
                            name="continent"
                            id="namerica"
                            value="northamerica"
                            onChange={this.radioChangeHandler} />
                        <label for="namerica" className="labelContinent">
                            <i class="fas fa-globe-americas" aria-hidden="true"></i>
                            <span>North America</span>
                        </label>
                    </div>
                    <div class="input-container">
                        <input
                            type="radio"
                            name="continent"
                            id="samerica"
                            value="southamerica"
                            onChange={this.radioChangeHandler} />
                        <label for="samerica" className="labelContinent">
                            <i class="fas fa-globe-americas" aria-hidden="true"></i>
                            <span>South America</span>
                        </label>
                    </div>
                    <div class="input-container">
                        <input
                            type="radio"
                            name="continent"
                            id="sasia"
                            value="southeastasia"
                            onChange={this.radioChangeHandler} />
                        <label for="sasia" className="labelContinent">
                            <i class="fas fa-globe-asia" aria-hidden="true"></i>
                            <span>South East Asia</span>
                        </label>
                    </div>
                    <div class="input-container">
                        <input
                            type="radio"
                            name="continent"
                            id="australia"
                            value="australia"
                            onChange={this.radioChangeHandler} />
                        <label for="australia" className="labelContinent">
                            <i class="fas fa-globe-asia" aria-hidden="true"></i>
                            <span className="shortname">Australia</span>
                        </label>
                    </div>
                </fieldset>
            </div>
        );
    }
}

import React, { Component } from 'react';

export default class Continent extends Component {
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
                    <input type="radio" name="continent" id="asia" />
                    <label for="card" className="labelContinent">
                        <i class="fas fa-globe-asia" aria-hidden="true"></i>
                        <span>Asia</span>
                    </label>
                    <input type="radio" name="continent" id="europe" />
                    <label for="cash" className="labelContinent">
                        <i class="fas fa-globe-europe" aria-hidden="true"></i>
                        <span>Europe</span>
                    </label>
                    <input type="radio" name="continent" id="namerica" />
                    <label for="cash" className="labelContinent"> 
                        <i class="fas fa-globe-americas" aria-hidden="true"></i>
                        <span>North America</span>
                    </label>
                    <input type="radio" name="continent" id="samerica" />
                    <label for="cash" className="labelContinent">
                        <i class="fas fa-globe-americas" aria-hidden="true"></i>
                        <span>South America</span>
                    </label>
                    <input type="radio" name="continent" id="sasia" />
                    <label for="cash" className="labelContinent">
                        <i class="fas fa-globe-asia" aria-hidden="true"></i>
                        <span>South East Asia</span>
                    </label>
                    <input type="radio" name="continent" id="australia" />
                    <label for="cash" className="labelContinent">
                        <i class="fas fa-globe-asia" aria-hidden="true"></i>
                        <span>Australia</span>
                    </label>
                </fieldset>
            </div>
        )
    }
}

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
                    <h2 className="fs-title">Choose Continent</h2>
                    <div className="fs-subtitle">This is step 1</div>
                    <div className="contContainer">
                    <a className="continentBtn" href="#"><i className="fas fa-globe-asia"></i></a>
                    <div className="contName">Asia</div>
                    </div>
                    <div className="contContainer">
                    <a className="continentBtn" href="#"><i className="fas fa-globe-europe"></i></a>
                    <div className="contName">Europe</div>
                    </div>
                    <div className="contContainer">
                    <a className="continentBtn" href="#"><i className="fas fa-globe-americas"></i></a>
                    <div className="contName">North America</div>
                    </div>
                    <div className="contContainer">
                    <a className="continentBtn" href="#"><i className="fas fa-globe-asia"></i></a>
                    <div className="contName">South America</div>
                    </div>
                    <div className="contContainer">
                    <a className="continentBtn" href="#"><i className="fas fa-globe-asia"></i></a>
                    <div className="contName">South Asia</div>
                    </div>
                    <div className="contContainer">
                    <a className="continentBtn" href="#"><i className="fas fa-globe-asia"></i></a>
                    <div className="contName">Australia</div>
                    </div>
                    <div className="contContainer">
                    <a className="continentBtn" href="#"><i className="fas fa-globe-asia"></i></a>
                    <div className="contName">Asia</div>
                    </div>
                    <button onClick={this.forword} className="btn btn-primary" name="previous">Next</button>
                </fieldset>
            </div>
        )
    }
}

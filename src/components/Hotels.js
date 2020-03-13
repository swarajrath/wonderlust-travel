import React, { Component } from 'react'

export default class Hotels extends Component {
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
                    <h2>This is the 3rd Page</h2>
                    <button onClick={this.forword} className="btn btn-primary">Next</button>
                    <button onClick={this.back} className="btn btn-secondary">Previous</button>
                </fieldset>
            </div>
        )
    }
}

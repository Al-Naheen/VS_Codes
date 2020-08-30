import React, { Component } from 'react';

class Select extends Component {

    constructor() {
        super()
        this.state = {
            city1: 'dhaka',
            city2: 'barisal',
            city3: 'rajshahi',
            city4: 'rongpur',
            city5: 'khulna',
            show: '',
            auto: 'rongpur'
        }
    }

    noChangeHandler = (event) => {
        let value = event.target.value
        this.setState({ show: value, auto:value})
    }


    render() {
        return (
            <div>
                {/* select er Value--> kono ekta option e thaktei hobe
                                   --> State ar kono property use korleo shei property r value ke kono option aage theke present thaktei hobe*/}

                <h3>{this.state.show}</h3>
                <select onChange={this.noChangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                    <option>{this.state.city5}</option>
                </select>
            </div>
        );
    }
}

export default Select;
import React, { Component } from 'react';

class Select_Option extends Component {

    constructor() {
        super()
        this.state = {
            selected: '',
            city1: 'Dhaka',
            city2: 'Rangpur',
            city3: 'Khulna',
            city4: 'Barishal',
            city5: 'Chittagong',
            auto: 'Barishal',
        }
    }

    onChangeHandler = (e) => {
        let inputName = e.target.name
        let inputValue = e.target.value;
        this.setState({ [ inputName ]: inputValue, auto: inputValue })
    }

    render() {
        return (
            <div>
                <p>{this.state.selected}</p>
                {/* Value dile--> Change kora jayNa */}
                {/* Value te--> Selected dileo Kaj kore...Tutorial follow kortesi dekhe Auto State create korsi & SETSTATE E 2 TA PROPERTY DISI...Normally value te this.state.selected dile etto kahini kora lagto na */}
                <select onChange={this.onChangeHandler} value={this.state.auto} name="selected">
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

export default Select_Option;
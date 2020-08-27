import React, { Component } from 'react';

class OnChange extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }


    OnChangeHandler = (event) => {
        let value = event.target.value
        this.setState({name:value})
    }

    render() {
        return (
            <div>
                <h1>OnChange Form</h1>
                <input onChange={this.OnChangeHandler} type='text' placeholder='Enter your Name'></input>
                <input type="submit" value='submit now'></input>
                <br></br>
                <br></br>

                <p>{this.state.name}</p>
            </div>
        );
    }
}

export default OnChange;
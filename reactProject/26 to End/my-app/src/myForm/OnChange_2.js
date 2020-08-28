import React, { Component } from 'react';

class OnChange_2 extends Component {
    constructor() {
        super()
        this.state = {
            userName:''
        }
    }

    onChange_2 = (event) => {
        let myName = event.target.name
        let myValue = event.target.value
        this.setState({ [ myName ] : myValue })
    }



    render() {
        return (
            <div>
                <h1>2nd OnChange Form</h1>
                <p>{this.state.userName}</p>
                <input onChange={this.onChange_2} name='userName' type='text' placeholder='Enter your Name'></input>
                <input type="submit" value='submit now'></input>
                <br></br>
                <br></br>
            </div>
        );
    }
}

export default OnChange_2;
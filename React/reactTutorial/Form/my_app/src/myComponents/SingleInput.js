import React, { Component } from 'react';

class SingleInput extends Component {
    constructor() {
        super()
        this.state = {
            username: ''
        }
    }

    onChangeHandler = (event) => {
        let myName = event.target.name
        let myValue = event.target.value
        this.setState({ [ myName ]: myValue })
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        alert(this.props.submitAlert)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <p>Name : {this.state.username}</p>
                    <input onChange={this.onChangeHandler} name='username' type="text" placeholder='Enter your Name' /><br />
                    <input type="submit" value='Submit Now' />
                </form>
            </div>
        );
    }
}

export default SingleInput;
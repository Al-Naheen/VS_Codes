import React, { Component } from 'react';

class Multi_input extends Component {


    constructor() {
        super()
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: ''
        }
    }

    onChangeHandler = (event) => {
        let names = event.target.name;
        let values = event.target.value;
        this.setState({ [ names ]: values })
    }

    OnClick = () => {
        alert(this.state.fname);
        alert(this.state.lname);
        alert(this.state.email);
        alert(this.state.phone);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.OnClick}>
                    <h1>Multi Input Selector</h1>


                    <p>First Name: {this.state.fname}</p>
                    <p>Last Name: {this.state.lname}</p>
                    <p>Email: {this.state.email}</p>
                    <p>Phone Number: {this.state.phone}</p>


                    <input onChange={this.onChangeHandler} name='fname' placeholder='First Name' type="text" />
                    <br />
                    <input onChange={this.onChangeHandler} name='lname' placeholder='Last Name' type="text" />
                    <br />
                    <input onChange={this.onChangeHandler} name='email' placeholder='Email' type="email" />
                    <br />
                    <input onChange={this.onChangeHandler} name='phone' placeholder='Phone Number' type="phone" />
                    <br />
                    <input type="submit" value='Submit Now' />
                </form>

            </div>
        );
    }
}

export default Multi_input;
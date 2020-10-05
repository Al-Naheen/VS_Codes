import React, { Component } from 'react';

class MultipleInput extends Component {

    constructor() {
        super()
        this.state = {
            fname: '',
            lname: '',
            email: '',
            phone: ''
        }
    }


    onSubmitHandler = (e) => {
        e.preventDefault()
        alert(`First Name : ${this.state.fname}
        Last Name : ${this.state.lname}
        Email Address : ${this.state.email}
        Phone Number : ${this.state.phone}`)
    }

    onChangeHandler = (e) => {
        let inputName = e.target.name
        let inputValue = e.target.value
        this.setState({ [ inputName ]: inputValue });

        // Form Validation
        if (inputName === 'fname') {
            let namePattern = /^([a-zA-Z ]){2,30}$/;
            if (!namePattern.test(inputValue)) {
                this.setState({ fname: 'First Name is not valid' })
            }
        }
        else if (inputName === 'lname') {
            let namePattern = /^([a-zA-Z ]){2,30}$/;
            if (!namePattern.test(inputValue)) {
                this.setState({ lname: 'Last Name is not valid' })
            }
        }
        else if (inputName === 'email') {
            let namePattern = /\S+@\S+\.\S+/;
            if (!namePattern.test(inputValue)) {
                this.setState({ email: 'Email is not valid' })
            }
        }
        else {
            if (!Number(inputValue)) {
                this.setState({ phone: 'Phone Number is not valid' })
            }
        }
    }

    render() {
        return (
            <div>
                <h3>First Name : {this.state.fname}</h3>
                <h3>Last Name : {this.state.lname}</h3>
                <h3>Email Address : {this.state.email}</h3>
                <h3>Phone Number : {this.state.phone}</h3>

                <form onSubmit={this.onSubmitHandler}>
                    <input onChange={this.onChangeHandler} type="text" placeholder='enter First Name' name='fname' /><br />
                    <input onChange={this.onChangeHandler} type="text" placeholder='enter Last Name' name='lname' /><br />
                    <input onChange={this.onChangeHandler} type="email" placeholder='enter your email' name='email' /><br />
                    <input onChange={this.onChangeHandler} type="phone" placeholder='Your Phone Number' name='phone' /><br />

                    <input type="submit" value='Submit Now' name='submit' />
                </form>
            </div>
        );
    }
}

export default MultipleInput;
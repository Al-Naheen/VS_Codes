import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class BootForm extends Component {
    constructor() {
        super()
        this.state = {
            fname: '',
            lname: '',
            email: '',
            select: 'Dhaka',
            multiSelect: '',
            textArea: '',
            phone: ''
        }
    }


    onSubmitHandler = (e) => {
        e.preventDefault()
        alert(`First Name : ${this.state.fname}
Last Name : ${this.state.lname}
Email Address : ${this.state.email}
Select your city : ${this.state.select}
Multiple Select : ${this.state.multiSelect}
Your Description : ${this.state.textArea}
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
        else if (inputName === 'select') {
            if (inputValue === '') {
                this.setState({ select: 'City is not valid' })
            }
        }
        else if (inputName === 'multiSelect') {
            if (inputValue === '') {
                this.setState({ multiSelect: 'Multi-Select is not valid' })
            }
        }
        else if (inputName === 'textArea') {
            if (inputValue == '') {
                this.setState({ textArea: 'Discription is not valid' })
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
            <div className='container mt-3'>

                <h2 className='text-center'>BootStrap Form</h2>
                <form onSubmit={this.onSubmitHandler}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">First Name</label>
                        <input onChange={this.onChangeHandler} name='fname' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput2">Last Name</label>
                        <input onChange={this.onChangeHandler} name='lname' type="text" class="form-control" id="exampleFormControlInput2" placeholder="Enter Last Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput3">Email address</label>
                        <input onChange={this.onChangeHandler} name='email' type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Select Your City</label>
                        <select onChange={this.onChangeHandler} name='select' value={this.state.select} class="form-control" id="exampleFormControlSelect1">
                            <option>Dhaka</option>
                            <option>Barisal</option>
                            <option>Rangpur</option>
                            <option>Khulna</option>
                            <option>Rajshahi</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput4">Phone Number</label>
                        <input onChange={this.onChangeHandler} name='phone' type="phone" class="form-control" id="exampleFormControlInput4" placeholder="Enter Phone Number" />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">Example multiple select</label>
                        <select onChange={this.onChangeHandler} name='multiSelect' multiple class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea onChange={this.onChangeHandler} name='textArea' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <input name='submit' type="submit" class="btn btn-primary form-control" id="exampleFormControlInput5" value='Submit Now' />
                    </div>
                </form>
            </div>
        );
    }
}


// Incomplete:
// 1. Null --> Ekta input field o jodi fill up na kori tahleo Form Submit hoy.
// 2. InValid Error --> Input er nishe SMALL TAG e show korabo(CWH Js Tutorial: Project-4(tut-50))
// 3. Select City --> State e HardCorely Dhaka likhe disi. Cause naile 1st e Dhaka select korle ashe name...like 1st e Barisal select kore blur e click kore then Dhaka select korle ashe but 1st ei google autoSelect e Address jokhon autoSelect hoe jay tokhon Faka ashe but Null/Error ashe na



export default BootForm;
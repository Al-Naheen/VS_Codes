//PreventDefault unsolved --> Form submit korar shathe shathe page Refresh hoe jay



import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class BootForm extends Component {


    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            select: '',
            option: '',
            textarea: ''
        }
    }

    onChangeHandler = (event) => {
        let names = event.target.name;
        let values = event.target.value;
        this.setState({ [ names ]: values })
    }

    OnClick = () => {
        let submit = document.getElementById('submit');
        submit.addEventListener('click', (e) => {
            e.preventDefault()
        })

        document.getElementById('name').innerHTML = (this.state.name);
        alert(this.state.email);
        alert(this.state.password);
        alert(this.state.select);
        alert(this.state.option);
        alert(this.state.textarea);
    }



    render() {
        return (
            <div>
                <h2 id='name'></h2>
                <h2>BootStrap Form</h2>
                <form className='container'>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">UserName</label>
                        <input onChange={this.onChangeHandler} name='name' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your UserName"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input onChange={this.onChangeHandler} name='email' type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Password</label>
                        <input onChange={this.onChangeHandler} name='password' type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Password"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Items Number</label>
                        <select onChange={this.onChangeHandler} name='select' class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">Food Items</label>
                        <select onChange={this.onChangeHandler} name='option' multiple class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Describe your feelings</label>
                        <textarea onChange={this.onChangeHandler} name='textarea' class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                        <button onClick={this.OnClick} id='submit' class="btn btn-primary" type="submit">Submit form</button>
                </form>
            </div >
        );
    }
}

export default BootForm;
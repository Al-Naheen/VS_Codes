import React, { Component } from 'react';

class BootForm extends Component {
    render() {
        return (
            <div>
                <h2>BootStrap Form</h2>
                <form className='container'>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">UserName</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter your UserName"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Password"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Items Number</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect2">Food Items</label>
                        <select multiple class="form-control" id="exampleFormControlSelect2">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Describe your feelings</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </div>
        );
    }
}

export default BootForm;
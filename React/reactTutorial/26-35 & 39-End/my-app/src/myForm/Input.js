import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Input extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>My 1st React Form</h1>
                    <input type='text' placeholder='Enter your Name'></input>
                    <input  type="submit" value='submit now'></input>
                    <br></br><br></br>
                </form>
            </div>
        );
    }
}

export default Input;
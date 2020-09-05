import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom'

class FindDOM extends Component {

    findDom() {
        let com = document.getElementById('color')
        ReactDOM.findDOMNode(com).style.color = 'blue'
        ReactDOM.findDOMNode(com).innerHTML = `
             <form>
    <input type="text" placeholder="Enter your name"></input>
    <input type="submit" value="submit now"></input>
             </form>`
    }

    render() {
        return (
            <div>
                <p id='color'>I am Naheen</p>
                <button onClick={this.findDom} className='btn btn-danger'>Danger</button><br></br>
            </div>
        );
    }
}

export default FindDOM;
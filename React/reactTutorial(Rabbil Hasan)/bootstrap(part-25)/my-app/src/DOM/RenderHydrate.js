import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class RenderHydrate extends Component {

    newTxt() {
        let txt = `Mara Khaoa Naheen`
        let container = document.getElementById('txt')
        let myCallback = function () {
            alert('Aare you chagol...?')

        }
        ReactDOM.render(txt, container, myCallback)
    }

    render() {
        return (
            <div>
                <button onClick={this.newTxt}>Click to change</button>
                <h1 id='txt'>I AM Naheen</h1>
            </div>
        );
    }
}

export default RenderHydrate;
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Hydrate extends Component {

    changeColor(){
        let color = 'red'
        let container = document.getElementById('color')

        ReactDOM.render(color, container)
    }

    render() {
        return (
            <div>
                <h1 id='color'>Amr Font & Color chnage hobe</h1>
                <button onClick={this.changeColor}>Color chnage</button>
            </div>
        );
    }
}

export default Hydrate;
import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class StatePara extends Component {
    constructor() {
        super()

        this.state = {
            name: "Al Naheen"
        }
    }

    Back() {
        document.getElementById('again').innerHTML = `<h2>then ${this.state.name}</h2>`
        document.getElementById('button').innerText="Click me"
    }
    changeName = a => {
        document.getElementById('willChange').innerHTML = `<div id="again">
        <h2>yooo broh...${a}</h2>
        <h1>I love you</h1>
        </div>`
        document.getElementById('button').innerText="back again"
    }



    render() {
        return (
            <div>

                <h1>This is StatePara</h1>

                <h2 id="willChange">then {this.state.name}</h2>
                <button className="btn btn-primary" onClick={this.changeName.bind(this, "baal naheen")}
                    onDoubleClick={this.Back.bind(this)} id="button">Click me </button>
            </div>
        )
    }
}

export default StatePara
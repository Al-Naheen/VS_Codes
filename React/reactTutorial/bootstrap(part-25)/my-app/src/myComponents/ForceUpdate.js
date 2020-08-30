import React, { Component } from 'react';

class ForceUpdate extends Component {
    constructor(){
        super()
        this.force = this.force.bind(this)
    }

    force(){
        this.forceUpdate()
    }



    render() {
        return (
            <div>
                <h1>AL Naheen</h1>
                <button onClick={this.force}>New Number</button>
                <h2>{Math.round(Math.random()*20)}</h2>
            </div>
        );
    }
}

export default ForceUpdate;
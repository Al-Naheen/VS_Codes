import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default class ForceUpdate extends Component {
    constructor(){
        super()
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this) //Na dile--> Undefined Error ashbe
    }

    forceUpdateHandler(){
        this.forceUpdate()
    }
    
    render() {
        return (
            <div>
                <button onClick={this.forceUpdateHandler} className='btn btn-primary mt-3'>Change Number</button>
                <h1>Random Number : {Math.round(Math.random()*100)}</h1>
            </div>
        )
    }
}

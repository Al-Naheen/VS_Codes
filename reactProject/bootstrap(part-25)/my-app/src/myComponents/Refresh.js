import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Refresh extends Component {
    constructor() {
        super()
        this.refresh = this.refresh.bind(this)
    }

    refresh(){
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                <button className='btn btn-warning m-5' onClick={this.refresh}>Refresh</button>
        <h1>{Math.round(Math.random()*10)}</h1>
            </div>
        )

    }
}

export default Refresh
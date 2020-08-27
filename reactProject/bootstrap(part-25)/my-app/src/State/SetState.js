import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class SetState extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Alnaheen'
        }
    }

    changeName(a) {
        this.setState({name:a})
    }

    render() {
        return (
            <div>
                <h1>my name is {this.state.name}</h1>
                <button className='btn btn-warning m-5' onClick={this.changeName.bind(this, 'baaaaaal')}>Click to Change</button>
            </div>
        )

    }
}

export default SetState
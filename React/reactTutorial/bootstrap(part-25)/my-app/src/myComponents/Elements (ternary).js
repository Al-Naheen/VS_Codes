import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Elements extends Component {
    constructor() {
        super()
        this.state = {
            name: 'alnaheen'
        }
    }

    changeName(a) {
        this.setState({ name: a })
    }

    render() {
        return (
            (this.state.name === 'Alnaheen' ?
                <h1>{this.state.name}</h1>
                :
                <div>
                    <button onClick={this.changeName.bind(this, 'baaaaal')} className='btn btn-primary m-5'>Change here</button>

                    <h2>{this.state.name}</h2>
                </div>
            )
        )

        }
}

export default Elements
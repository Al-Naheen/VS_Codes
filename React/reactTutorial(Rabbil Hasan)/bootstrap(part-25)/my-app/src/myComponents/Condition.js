import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class Conditions extends Component {
    constructor() {
        super()
        this.state = {
            name: 'AlNaheen'
        }
    }

    changeName(a) {
        this.setState({name:a})
    }

    render() {
     if (this.state.name === 'Alnaheen') 
     {
     return( <h1>{this.state.name}</h1>)
     } 
     else 
     {
     return(<div>
         <button onClick={this.changeName.bind(this, 'baaaaaal')} className='btn btn-danger m-5'>Else</button>
     <h2>{this.state.name}</h2>
     </div>
     )
     }

    }
}

export default Conditions
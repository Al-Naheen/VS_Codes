import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Full_class1_18 extends Component {
    constructor() {
        super()
        const obj = {
            disease: 'abnormal',
            matha: 'noshto',
            marks: {
                math: [ 99, 100 ],
                english: 89,
                ICT: 50
            }
        }

        this.state = obj;
    }

    // Work with 2/More Parameters
    onChangeHandler(a, b) {
        alert(a)

        this.setState({ matha: this.props.mathaEkhon })
    }

    render() {
        return (
            <div>
                {/* Props */}
                <h2>my name is {this.props.name}</h2>
                <h2>I am the {this.props.number} class</h2>
                {/* State */}
                <h3>My main disease is {this.state.disease} </h3>
                <h2>Amr matha {this.state.matha}</h2>
                {/* State Complexity */}
                <h2>Math e paisi {this.state.marks.math[ 0 ]}</h2> 

                <button className={this.props.bootstrapButton} onClick={this.onChangeHandler.bind(this, this.props.alertHo)}>Click Class</button>
            </div>
        )
    }
}
export default Full_class1_18
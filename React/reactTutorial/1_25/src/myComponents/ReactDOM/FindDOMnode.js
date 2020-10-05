import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class FindDOMnode extends Component {

    ChangeIMG() {
        let container = document.getElementById('myID')
        let myH1 = document.getElementById('myH1')

        ReactDOM.findDOMNode(myH1).innerHTML = 'I am Naheen'
        ReactDOM.findDOMNode(myH1).style.color = 'brown'
        // font-family, font-size --> majhe - thaka Property gula execute hoy na
        ReactDOM.findDOMNode(myH1).style.font='10px'

        if (ReactDOM.findDOMNode(container).src == "https://image.shutterstock.com/image-vector/illustration-computer-monitor-holding-cpu-260nw-82095055.jpg") {
            ReactDOM.findDOMNode(container).src = 'https://thumbs.dreamstime.com/b/vector-color-sketch-illustration-pile-shit-flies-white-background-79357989.jpg'

        } else {
            ReactDOM.findDOMNode(container).src = "https://image.shutterstock.com/image-vector/illustration-computer-monitor-holding-cpu-260nw-82095055.jpg"
        }
    }


    render() {
        return (
            <div>
                <button onClick={this.ChangeIMG} className="btn btn-dark m-4">
                    Change Image
                </button> <br/>
                <h1 id='myH1'></h1>
                <img
                    id='myID'
                    src="https://image.shutterstock.com/image-vector/illustration-computer-monitor-holding-cpu-260nw-82095055.jpg"
                    alt="Super Computer" />

            </div>
        )
    }
}

import Axios from 'axios'
import React, { Component } from 'react'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            postData: "",
            postResult: ""
        }
    }

    onClickHandler = () => {
        // Get Request r motoi...
        Axios.post('http://dummy.restapiexample.com/api/v1/create', this.state.postData)
            .then((response) => {
                this.setState({ postResult: response.data.data.id })
                alert(this.state.postResult);
                console.log(response.data.data);
            }).catch((err) => {
                alert('Something went wrong');
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <p>{this.state.postData}</p>
                <h1>{this.state.postResult}</h1>

                <input onChange={(e => this.setState({ postData: e.target.value }))} placeholder="Enter Your Name" type="text" />
                <button onClick={this.onClickHandler}>Send</button>
            </div>
        )
    }
}

export default Post
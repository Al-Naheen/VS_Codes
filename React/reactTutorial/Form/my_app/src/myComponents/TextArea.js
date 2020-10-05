import React, { Component } from 'react';

class TextArea extends Component {
    constructor() {
        super()
        this.state = {
            textArea: 'I am The very best',
        }
    }

    onChangeHandler = (e) => {
        let inputName = e.target.name
        let inputValue = e.target.value;
        this.setState({ [ inputName ]: inputValue })
    }

    render() {
        return (
            <div>
                <textarea onChange={this.onChangeHandler} name="textArea" placeholder='enter your description' cols="50" rows="8">Hi I am TextArea. How's going guys ?</textarea>

                <p>{this.state.textArea}</p>
            </div>
        );
    }
}

export default TextArea;
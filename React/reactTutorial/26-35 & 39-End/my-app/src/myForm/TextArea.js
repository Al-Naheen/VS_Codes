import React, { Component } from 'react';

class TextArea extends Component {

    constructor(){
        super()
        this.state = {
           Naheen : ''
        }
    }

    onChangeHandler=(event)=>{
        let name = event.target.name
        let value = event.target.value;
        this.setState({[name]: value})
    }


    render() {
        return (
            <div>
                {/* Value--> TextArea y kichu likha jay na(baje)
                    Inside 2 tag--> ja likha thake oita muche new stuffs
                    PlaceHolder--> Best*/}

                    <h2>{this.state.Naheen}</h2>
                <textarea onChange={this.onChangeHandler} name="Naheen" cols="80" rows="10" placeholder="Enter Something"></textarea>
            </div>
        );
    }
}

export default TextArea;
import React, { Component } from 'react';

class OnSubmit_1 extends Component {
    constructor() {
        super()
        this.state = {
            userName: ''
        }
    }

    onChange_2 = (event) => {
        let myName = event.target.name
        let myValue = event.target.value
        this.setState({ [ myName ]: myValue })
    }


    onSubmitHandler=()=>{
        let alt = alert(this.state.userName)
        if (alt == 'ok') {
            prompt('kirre.......')
        } else {
            alert('bla vla ')
        }
    }


    render() {
        return (
            <div>
                <form id='myForm' onSubmit={this.onSubmitHandler}>
                    <h1>2nd OnChange Form</h1>
                    <p>{this.state.userName}</p>
                    <input onChange={this.onChange_2} name='userName' type='text' placeholder='Enter your Name'></input>
                    <input type="submit" value='submit now'></input>
                    <br></br>
                    <br></br>             
                </form>
            </div>
        );
    }
}

export default OnSubmit_1;
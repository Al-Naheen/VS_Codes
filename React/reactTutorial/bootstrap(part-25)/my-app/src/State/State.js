import React, { Component } from 'react'

class State extends Component{
    constructor(){
        super()

        this.state={
            name : 'Naheen',
            'c/no': 5841,
            habit : 'mara khaoa',
            profession :" Web developer"
        }
    }

    render(){
        return(
            <div className='container'>
                <h1>My name is {this.state.name}</h1>
                <h1>My habit is {this.state.habit}</h1>
                <h1>My Roll is {this.state["c/no"]}</h1>
                <h1>My profession is {this.state.profession}</h1>

            </div>
        )
    }
}


export default State
import React, { Component } from 'react'

class NestedState extends Component{
    constructor(){
        super()
        let obj = {
            name:'al naheen',
            roll:5841,
            kaj:'web dev'
        }

        this.state=obj
    }

    render(){
        return(
        <h1>{this.state.name}</h1>
        )
    }
}

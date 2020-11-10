import React, { Component } from 'react'

export default class Conditional extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Naheen',
            class: 9,
            Web_developer: true
        }
    }

    render() {
        // Conditional
        // if (this.state.Web_developer) {
        //     return <h1>tmi mara khao </h1>
        // } else {
        //     return <h1>Its False</h1>
        // }

        return (
            this.state.Web_developer ?
                <h1>It's True</h1>
                :
                <h2>False</h2>
        )
    }
}

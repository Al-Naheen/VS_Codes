import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavigation extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><NavLink exact activeStyle={{color:'red'}} to='/'>Home</NavLink></li>
                    <li><NavLink activeStyle={{color:'blue'}} to='/about'>About</NavLink></li>
                    <li><NavLink activeStyle={{color:'orange'}} to='/services'>Services</NavLink></li>
                    <li><NavLink activeStyle={{color:'green'}} to='/contact'>Contact</NavLink></li>

                    <h1>Ami naheen</h1>
                </ul>
            </div>
        )
    }
}

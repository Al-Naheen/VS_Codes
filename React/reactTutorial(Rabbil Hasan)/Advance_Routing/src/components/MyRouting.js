import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import { Route, Switch } from 'react-router-dom'
import NotFinding from './pages/NotFinding'

export default class MyRouting extends Component {
    render() {
        return (
            <div>
                {/* Switch na dile --> NotFinding ta parmanently Website e show korbe...baki page gula thik e load hobe */}
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/about' exact component={About}></Route>
                    <Route path='/services' exact component={Services}></Route>
                    <Route path='/contact' exact component={Contact}></Route>
                    <Route component={NotFinding}></Route>
                </Switch>
            </div>
        )
    }
}

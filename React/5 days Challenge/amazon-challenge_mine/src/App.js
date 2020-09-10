import React from 'react';
import './App.css';
import Header from './myComponents/Header';
import Home from './myComponents/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './myComponents/Checkout';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
      <Header></Header>

        <Switch>
          <Route path='/checkout'>
            <Checkout></Checkout>
          </Route>

          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

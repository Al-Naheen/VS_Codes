import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import {Route, Link, BrowserRouter as Router} from "../node_modules/react-router-dom";
import * as serviceWorker from './serviceWorker';


const myRouter = (


< Router>
<div>
  {/* Navbar */}
  <ul>
    <Link to='/' >Home  </Link>
    <Link to='/about' >About  </Link>
    <Link to='/contact' >Contact  </Link>
    <Link to='/services' >Services  </Link>
  </ul>

  {/* Declare Path */}
  <Route  exact path='/' component={App} ></Route>
  <Route path='/about' component={About} ></Route>
  <Route path='/services' component={Services} ></Route>
  <Route path='/contact' component={Contact} ></Route>
</div>
</Router>


)

ReactDOM.render(myRouter, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

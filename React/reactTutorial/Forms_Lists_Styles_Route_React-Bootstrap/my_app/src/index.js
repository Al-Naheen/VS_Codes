import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './Styles/Main';
import BootForm from './myForms/BootForm';
import Json from './list/JSON';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const linkClass = 'text-decoration-none m-2 text-light font-weight-lighter';
const routing = (
  <Router>
    <div>
      {/* <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/styles'>All-Styles</Link></li>
        <li><Link to='/bootForm'>Bootstrap Form</Link></li>
        <li><Link to='/json'>JSON List</Link></li>
      </ul> */}


      {/* React-BootStrap */}
      <Navbar className='navbar-dark bg-dark' variant='dark' expand="lg">
        <Navbar.Brand><Link className={`font-size-60 text-white text-decoration-none`} to='/'>Navbar</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav><Link className={linkClass} to='/'>Home</Link></Nav>
            <Nav><Link className={linkClass} to='/styles'>All-Styles</Link></Nav>
            <Nav><Link className={linkClass} to='bootForm'>BootStrap-Form</Link></Nav>
            <Nav><Link className={linkClass} to='/json'>JSON List</Link></Nav>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Route path='/' component={App} exact />
      <Route path='/styles' component={Main} />
      <Route path='/bootForm' component={BootForm} />
      <Route path='/json' component={Json} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root')
);

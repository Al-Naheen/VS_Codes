import React from 'react';
import './App.css';
import Navber from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Messages from "./pages/Messages";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <Router>
        <Navber></Navber>
        <Switch>
          <Route path = '/' exact component={Home}></Route>
          <Route exact path = '/reports' component={Reports}></Route>
          <Route exact path = '/products' component={Products}></Route>
          <Route exact path = '/team' component={Team}></Route>
          <Route exact path = '/messages' component={Messages}></Route>
          <Route exact path = '/support' component={Support}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import Header from './myComponents/Header';
import Home from './myComponents/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './myComponents/Checkout';
import Login from './myComponents/Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './myComponents/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './myComponents/Orders';

const promise = loadStripe(
  "pk_test_51HQDZqAc9LK2J26ZQPwwvIZriGn9wo5LBpuxN5Q4upPl8ZKcVqnbYQ7X9SZUgonTzIiN8GwSa3KCt21AmgPuwIDy00B4PghXrn"
);

function App() {
  const [ { }, dispatch ] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);


      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    })
  }, []);


  return (
    // BEM
    <Router>
      <div className="app">

        <Switch>
          <Route path='/payment'>
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>

          <Route path='/orders'>
            <Header></Header>
            <Orders></Orders>
          </Route>

          <Route path='/login'>
            <Login></Login>
          </Route>

          <Route path='/checkout'>
            <Header></Header>
            <Checkout></Checkout>
          </Route>

          <Route path='/'>
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;

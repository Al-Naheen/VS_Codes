import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, isLoggedIn } from './actions'

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.isLoggedReducer)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <br />
      <hr />
      <br />
      {isLogged ? <h3>Welcome to our shitty world</h3> : null}
      <button onClick={() => dispatch(isLoggedIn())}>{isLogged ? 'Sign Out' : 'Log In'}</button>
    </div>
  );
}

export default App;

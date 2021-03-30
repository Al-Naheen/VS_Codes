import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux';



// // 1. ACTION -> name of a Command(Increment)
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }

// // 2. REDUCER -> tie the Store & Actions together
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state += 1;
//     case 'DECREMENT':
//       return state - 1;
//   }
// }

// // 3. STORE -> Globalized State
// let store = createStore(counter)

// // 5. Display it in the Console
// store.subscribe(() => console.log(store.getState()))

// // 4. DISPATCH
// store.dispatch(increment())


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

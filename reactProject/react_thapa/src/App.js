import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Hello from './myComponents/Hello';
// import Hello2 from './myComponents/Hello2';
// import Hello3 from './myComponents/Hello3';
// import Hello4 from './myComponents/Hello4';
import Hello5 from './myComponents/Hello5';
// import Welcome from './myComponents/Welcome';
// import Welcome2 from './myComponents/Welcome2';
import Welcome3 from './myComponents/Welcome3';

function App() {
  return (
    <div className="App">
      {/* <Hello></Hello>
      <Hello2></Hello2>
      <Hello3></Hello3>
      <Hello4></Hello4> */}
      <Hello5 name="Kutta" baal='saaal' roll='1'></Hello5>
      <Hello5 name="Bolod" baal='chal' roll='2'></Hello5>
      <Hello5 name="Mental" baal='jhaal' roll='3'></Hello5>
      <Hello5 name="Khaet" baal='kodbell' roll='4'></Hello5>
      <Hello5 name="Naheen" baal='hola' roll='5'></Hello5>


      {/* <Welcome></Welcome>
      <Welcome2></Welcome2> */}
        <Welcome3 name='FCC' num="1"></Welcome3>
        <Welcome3 name='CWH' num="2"></Welcome3>
        <Welcome3 name='PWM' num="3"></Welcome3>
        <Welcome3 name='CP' num="4"></Welcome3>
    </div>
  );
}

export default App;

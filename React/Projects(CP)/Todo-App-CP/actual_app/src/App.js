import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import {firebase} from "firebase";
import db from './firebase'

function App() {

  // State--> Short-term memory
  const [ todos, setTodos ] = useState(['abc', 'def'])
  const [ input, setInput ] = useState('')

  // When the app loads, we need to listen and fetch new todos as they get added/removed
  useEffect(() => {
    // this code here...fires when the app.js loads
    db.collection('todo').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const onChangeHandler = (event) => {
    setInput(event.target.value)
  }

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([ ...todos, input ])
    setInput('')
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a ToDo</InputLabel>
          <Input value={input} onChange={onChangeHandler} type="text"/>
        </FormControl>

        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
        {/* <button type='submit' >Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} ></Todo>
        ))}

      </ul>
    </div>
  );
}

export default App;

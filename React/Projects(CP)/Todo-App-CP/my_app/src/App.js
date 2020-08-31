import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//npm install --save material-ui (hoisilo but Import hoy na)
// import { Button } from '@material-ui/core';
import './App.css';
import Todo from './Todo';

function App() {
  //setUp Short-Term-Memory
  const [ titles, setTitle ] = useState([])
  const [ todos, setTodos ] = useState([])
  const [ desInput, setDesInput ] = useState('')
  const [ titleInput, setTitleInput ] = useState('')
  console.log(desInput);


  const onChangeDes = (event) => {
    let values = event.target.value;
    setDesInput(values)
  }
  const onChangeTitle = (event) => {
    let values = event.target.value;
    setTitleInput(values)
  }
  const onClickHandler = (event) => {
    event.preventDefault()
    setTodos([ ...todos, desInput ])
    setTitle([ ...titles, titleInput ])
    setTitleInput('')
    setDesInput('') //clear up the input after clicking Add-Todo Button
  }


  return (
    <div className="App container">
      <h1>Hello world</h1>
      <form>

        <div class="form-group container" type="submit">
          <label for="title">Title</label>
          <input value={titleInput} onChange={onChangeDes} type="text" class="form-control" />
          <small id="emailHelp" class="form-text text-muted">Add an item to the list</small>
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea value={desInput} onChange={onChangeTitle} class="form-control" id="description" rows="3"></textarea>
        </div>

        <button disabled={!desInput && !titleInput} type="submit" onClick={onClickHandler} className="btn btn-dark m-2">Add Todo Item</button>
      </form>


      <ul>
        {titles.map(title =>(
          <Todo text={title}></Todo>
        ))}

        {todos.map(todo =>
          (
            <Todo text={todo}></Todo>
            // <li>{todo}</li>
          )
        )}
      </ul>
    </div>
  );
}

export default App;

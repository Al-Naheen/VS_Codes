import React, { useEffect, useState } from 'react';
import './App.css';
import { FormControl, IconButton, Input, InputLabel } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';

function App() {
  const [ input, setInput ] = useState('');
  const [ messages, setMessages ] = useState([]);
  const [ username, setUsername ] = useState('');

  // useState = Variable in React
  // useEffect = run code on a Condition


  useEffect(() => {
    // run code here...
    // If its blank inside [], this code runs ONCE when the app component Loads
    // if we have a variable like input, it runs every time input changes
    setUsername(prompt('Please enter your name'))
  }, [])//Condition

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])


  const sendMessage = (event) => {
    event.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }


  return (
    <div className="app">
      <div className="app__header">
        <h1><img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=75&h=75' className="logo" alt="React Messenger" /><span className='app__headerSpan'>Naheen's Messenger</span></h1>
        <h3>Welcome <b className="app__headerBold">{username}</b> !</h3>

      </div>
      <form className='app__form'>
        <FormControl className="app__formControl">
          <InputLabel>Type a Message...</InputLabel>
          <Input placeholder='Enter a message' className="app__input" color="primary" value={input} onChange={(e) => setInput(e.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} color="primary" variant="contained" type="submit" onClick={sendMessage}><SendIcon /></IconButton>
        </FormControl>
      </form>

      <div className="app__messageContainer">
        <FlipMove>
          {
            messages.map(({ id, message }) => (
              <Message key={id} username={username} message={message} />
            ))
          }
        </FlipMove>
      </div>

    </div>
  );
}

export default App;

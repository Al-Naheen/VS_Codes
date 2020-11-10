import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyNavigation from './components/MyNavigation';
import MyRouting from './components/MyRouting';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavigation></MyNavigation>
        <MyRouting></MyRouting>
      </BrowserRouter>
    </div>
  );
}

export default App;

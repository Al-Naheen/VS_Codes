import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <h1>hello react</h1>

      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals}></Row>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;

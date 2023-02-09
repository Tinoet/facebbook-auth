import facebook from './facebook.png';
import React, { Component } from 'react'
import './App.css';
import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={facebook} className="App-logo" alt="logo" />
        <h1 className='App-title'> Facebook Auth Login</h1>
      </header>
        <p className='App-intro'>
          To get started, Authenticate with Facebook.
        </p>
        <Facebook/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Posts from './containers/Posts';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Posts />
      </div>
    );
  }
}

export default App;

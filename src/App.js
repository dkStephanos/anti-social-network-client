import React, { Component } from 'react';
import Posts from './containers/Posts';
import logo from './logo.svg';
import Button from 'react-toolbox/lib/button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Button raised primary>
          Hi!
        </Button>
        <Posts />
      </div>
    );
  }
}

export default App;

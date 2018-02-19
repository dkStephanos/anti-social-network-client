import React, { Component } from 'react';
import Posts from './containers/Post/Posts';
import logo from './logo.svg';
import Login from './components/Login/Login';
import Main from './components/Main';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.props.children}
      </div>
    );
  }
}

export default App;

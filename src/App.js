import React, { Component } from 'react';
import Posts from './containers/Posts';
import logo from './logo.svg';
import { getQueryParams } from './utils';
import Login from './components/Login';
import Main from './components/Main';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.isLoggedIn() ? <Main token={this.state.token} /> : <Login />}
      </div>
    );
  }
}

export default App;

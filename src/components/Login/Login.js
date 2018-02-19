import React, { Component } from 'react';
import LoginButton from './LoginButton';
import { auth } from '../../utils/init';
import './Login.css';

class Login extends Component {
  componentWillMount() {
    if (auth.loggedIn()) {
      window.location.replace('/home');
    }
  }

  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2 className="Login-title">Anti-Social Network</h2>
          <p className="Login-intro">
            A minimilistic take on social media that encourages an emphasis on
            quality by restricting quantity.
          </p>
        </div>
        <div className="Login-buttons">
          <LoginButton />
        </div>
      </div>
    );
  }
}

export default Login;

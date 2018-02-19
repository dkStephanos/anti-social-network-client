import { auth } from '../../utils/init';
import React, { Component } from 'react';
import logo from '../../logo.svg';
import './LoginTransition.css';

class LoginTransition extends Component {
  componentDidMount() {
    const token = auth.getQueryParams();
    auth.doAuthentication(token.token);
  }

  render() {
    return (
      <div className="login-transition">
        <img src={logo} className="Loading-logo" alt="logo" />
      </div>
    );
  }
}
export default LoginTransition;

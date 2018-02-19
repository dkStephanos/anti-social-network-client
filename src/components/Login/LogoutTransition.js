import { auth } from '../../utils/init';
import React, { Component } from 'react';
import logo from '../../logo.svg';
import './LogoutTransition.css';

class LogoutTransition extends Component {
  componentDidMount() {
    auth.logout();
  }

  render() {
    return (
      <div className="login-transition">
        <img src={logo} className="Loading-logo" alt="logo" />
      </div>
    );
  }
}
export default LogoutTransition;

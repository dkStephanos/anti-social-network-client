import { auth } from '../utils/init';
import React, { Component } from 'react';

class LoginTransition extends Component {
  componentDidMount() {
    const token = auth.getQueryParams();
    auth.doAuthentication(token.token);
  }

  render() {
    return (
      <div className="login-transition">
        <i className="fa fa-spinner fa-spin fa-5x color-font-aqua" />
      </div>
    );
  }
}
export default LoginTransition;

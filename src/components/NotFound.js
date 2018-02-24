import React, { Component } from 'react';
import { auth } from '../utils/init';
import Button from 'react-toolbox/lib/button/Button';
import './NotFound.css';

class NotFound extends Component {
  componentWillMount() {
    if (!auth.loggedIn()) {
      window.location.replace('/');
    }
  }

  handleHomeClick() {
    window.location.replace('/home');
  }

  render() {
    return (
      <div className="NotFound">
        <div className="NotFound-header">
          <h2 className="NotFound-title">Anti-Social Network</h2>
          <p className="NotFound-intro">
            This is not the page you are looking for...
          </p>
        </div>
        <div className="NotFound-buttons">
          <Button
            className="home-button"
            label="Home"
            raised
            ripple
            onClick={this.handleHomeClick}
          />
        </div>
      </div>
    );
  }
}

export default NotFound;

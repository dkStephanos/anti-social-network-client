import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Posts from '../containers/Post/Posts';
import UserProfile from '../containers/User/UserProfile';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Fuckkk</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Main;

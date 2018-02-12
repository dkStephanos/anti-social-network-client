import React, { Component } from 'react';
import Posts from './containers/Posts';
import logo from './logo.svg';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch(`${REACT_APP_API_URL}/posts`)
      .then(response => response.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;

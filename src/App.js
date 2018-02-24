import React, { Component } from 'react';
import Posts from './containers/Post/Posts';
import logo from './logo.svg';
import Login from './components/Login/Login';
import Connections from './containers/Connection/Connections';
import { auth } from './utils/init';

import Button from 'react-toolbox/lib/button/Button';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';
import Navigation from 'react-toolbox/lib/navigation/Navigation';
import Link from 'react-toolbox/lib/link/Link';
import './App.css';

class App extends Component {
  state = {
    drawerActive: false,
    drawerPinned: false,
    sidebarPinned: false
  };

  toggleDrawerActive = () => {
    this.setState({ drawerActive: !this.state.drawerActive });
  };

  toggleDrawerPinned = () => {
    this.setState({ drawerPinned: !this.state.drawerPinned });
  };

  toggleSidebar = () => {
    this.setState({ sidebarPinned: !this.state.sidebarPinned });
  };

  componentDidMount() {
    const script1 = document.createElement('script');
    const script2 = document.createElement('script');
    const script3 = document.createElement('script');

    script1.src =
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js';
    script1.async = true;
    script2.src =
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js';
    script2.async = true;
    script3.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js';
    script3.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
  }

  render() {
    const appBar = auth.loggedIn() ? (
      <AppBar
        leftIcon="menu"
        rightIcon="..."
        onLeftIconClick={this.toggleDrawerActive}
        onRightIconClick={this.toggleSidebar}
        className="app-bar"
      />
    ) : (
      ''
    );

    return (
      <div className="App" id="large-header">
        <header className="App-header">
          <h1>Anti-Social Network</h1>
          <canvas class="demo" id="demo-canvas" />
        </header>
        <Layout className="App-layout">
          <NavDrawer
            active={this.state.drawerActive}
            pinned={this.state.drawerPinned}
            permanentAt="xxxl"
            onOverlayClick={this.toggleDrawerActive}
          >
            <Navigation type="vertical">
              <Link
                className="navLink"
                href="/home"
                active
                raised
                label="Profile"
              />
              <Link
                className="navLink"
                href="/users"
                active
                raised
                label="Add Connections"
              />
              <Link
                className="navLink"
                href="/postFeed"
                active
                raised
                label="Post Feed"
              />
              <Link
                className="navLink"
                href="/posts"
                active
                raised
                label="All Posts"
              />
              <Link
                className="navLink"
                href="/logout"
                active
                raised
                label="Logout"
              />
            </Navigation>
          </NavDrawer>

          <Panel scrollY={true} class="content">
            {appBar}

            <div className="panel-content">{this.props.children}</div>
          </Panel>

          <Sidebar pinned={this.state.sidebarPinned} width={5}>
            <div>
              <IconButton icon="close" onClick={this.toggleSidebar} />
            </div>
            <div style={{ flex: 1 }}>
              <Connections />
            </div>
          </Sidebar>
        </Layout>

        <footer>Koi</footer>
      </div>
    );
  }
}

export default App;

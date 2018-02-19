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

  render() {
    const appBar = auth.loggedIn() ? (
      <AppBar
        leftIcon="menu"
        title="Anti-Social Network"
        rightIcon="..."
        onLeftIconClick={this.toggleDrawerActive}
        onRightIconClick={this.toggleSidebar}
        className="app-bar"
      />
    ) : (
      ''
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Layout>
          <NavDrawer
            active={this.state.drawerActive}
            pinned={this.state.drawerPinned}
            permanentAt="xxxl"
            onOverlayClick={this.toggleDrawerActive}
          >
            <Navigation type="vertical">
              <Link
                className="navLink"
                href="http://"
                active
                raised
                label="Profile"
              />
              <Link
                className="navLink"
                href="http://"
                active
                raised
                label="Add Connections"
              />
              <Link
                className="navLink"
                href="http://"
                active
                raised
                label="View Posts"
              />
            </Navigation>
          </NavDrawer>

          <Panel>
            {appBar}
            <div>
              <div className="panelContent">{this.props.children}</div>
            </div>
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
      </div>
    );
  }
}

export default App;

import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';
import IconButton from 'react-toolbox/lib/button/IconButton';
import Layout from 'react-toolbox/lib/layout/Layout';
import NavDrawer from 'react-toolbox/lib/layout/NavDrawer';
import Panel from 'react-toolbox/lib/layout/Panel';
import Sidebar from 'react-toolbox/lib/layout/Sidebar';

import User from './User';
import Posts from './Posts';
import Connections from './Connections';
import './UserProfile.css';

class UserProfile extends React.Component {
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
    return (
      <Layout>
        <NavDrawer
          active={this.state.drawerActive}
          pinned={this.state.drawerPinned}
          permanentAt="xxxl"
          onOverlayClick={this.toggleDrawerActive}
        >
          <p>Navigation, account switcher, etc. go here.</p>
        </NavDrawer>

        <Panel>
          <AppBar leftIcon="menu" onLeftIconClick={this.toggleDrawerActive} />
          <div>
            <div className="panelContent">
              <div className="userData">
                <User />
                <Button
                  label="Show Connections"
                  raised
                  onClick={this.toggleSidebar}
                />
              </div>
              <div className="userConnectionsPosts">
                <Posts />
              </div>
            </div>
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
    );
  }
}

export default UserProfile;

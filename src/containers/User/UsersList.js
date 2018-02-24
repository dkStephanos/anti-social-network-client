import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-toolbox/lib/button/Button';

import UserCard from '../../components/User/UserCard';
import { getUsers, getUser } from '../../actions/user';
import { getConnectionsIds, createConnection } from '../../actions/connections';
import './UserList.css';

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getConnectionsIds();
  }

  addConnection = connection => {
    // Hides the clicked button
    connection.currentTarget.style.visibility = 'hidden';
    // Passes in the value of 'userId' of the clicked button
    this.props.createConnection(connection.currentTarget.attributes[0].value);
  };

  render() {
    const users = this.props.users.map(user => (
      <div key={user.id} className="user-list-item">
        <UserCard
          className="user-card"
          user={user}
          isConnected={
            this.props.connectionsIds.includes(user.id) ? false : true
          }
          handleAddConnection={this.addConnection}
        />
      </div>
    ));

    return (
      <div>
        <div className="users-list">
          <h1>All Users</h1>
          <div className="users">{users}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.userReducer,
    connectionsIds: state.connectionReducer
  };
};

export default connect(mapStateToProps, {
  getUsers,
  getConnectionsIds,
  createConnection,
  getUser
})(UsersList);

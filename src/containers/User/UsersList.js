import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-toolbox/lib/button/Button';

import UserCard from '../../components/User/UserCard';
import { getUsers } from '../../actions/user';
import { getConnectionsIds, createConnection } from '../../actions/connections';
import './UserList.css';

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
    this.props.getConnectionsIds();
  }

  addConnection = connection => {
    debugger;
    this.props.createConnection(connection.currentTarget.attributes[0].value);
  };

  render() {
    const users = this.props.users.map(user => (
      <div className="user-list-item">
        <UserCard className="user-card" key={user.id} user={user} />
        {this.props.connectionsIds.includes(user.id) ? (
          ''
        ) : (
          <Button
            className="add-connection-button"
            userId={user.id}
            onClick={this.addConnection}
          >
            Add Connection
          </Button>
        )}
      </div>
    ));

    return (
      <div>
        <h1>All Users</h1>
        <div className="users">{users}</div>
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
  createConnection
})(UsersList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-toolbox/lib/button/Button';

import UserCard from './UserCard';
import { getUsers } from '../../actions/user';
import './UserList.css';

class UsersList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    debugger;
    const users = this.props.users.map(user => (
      <div key={user.id} className="user-list-item">
        <UserCard className="user-card" user={user} />
      </div>
    ));

    return (
      <div className="users-list-content">
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
    users: state.userReducer.users
  };
};

export default connect(mapStateToProps, {
  getUsers
})(UsersList);

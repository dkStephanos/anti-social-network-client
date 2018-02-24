import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../Post/PostForm';
import UserCard from './UserCard';
import { getCurrentUser } from '../../actions/user';

class User extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="userContainer">
        <div className="user">
          <UserCard user={this.props.user} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.currentUser
  };
};

export default connect(mapStateToProps, { getCurrentUser })(User);

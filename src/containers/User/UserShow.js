import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../Post/PostForm';
import UserCard from './UserCard';
import UserPosts from '../Post/UserPosts';
import User from './User';
import { getUserById } from '../../actions/user';
import './UserShow.css';

class UserShow extends Component {
  componentDidMount() {
    this.props.getUserById(this.props.userId);
  }

  render() {
    debugger;
    return (
      <div className="user-show-content">
        <div className="user-show-data">
          <UserCard className="user-card" user={this.props.user} />
        </div>
        <div className="user-posts">
          <UserPosts userid={this.props.userId} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userReducer.user,
    userId: ownProps.match.params.userId
  };
};

export default connect(mapStateToProps, { getUserById })(UserShow);

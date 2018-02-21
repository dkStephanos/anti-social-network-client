import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../Post/PostForm';
import UserCard from '../../components/User/UserCard';
import UserPosts from '../Post/UserPosts';
import User from './User';
import { getUserById } from '../../actions/user';

class UserShow extends Component {
  componentDidMount() {
    this.props.getUserById(this.props.userId);
  }

  render() {
    return (
      <div className="panelContent">
        <div className="userData">
          <User className="userCard" />
        </div>
        <div className="userConnectionsPosts">
          <UserPosts userid={this.props.userId} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userReducer,
    userId: ownProps.match.params.userId
  };
};

export default connect(mapStateToProps, { getUserById })(UserShow);

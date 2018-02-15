import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../containers/PostForm';
import UserCard from '../components/UserCard';
import { getUser } from '../actions/user';

class User extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    debugger;
    return (
      <div>
        <h1>User Page</h1>
        <div className="user">
          <UserCard user={this.props.user} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer
  };
};

export default connect(mapStateToProps, { getUser })(User);

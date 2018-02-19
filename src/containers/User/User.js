import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../Post/PostForm';
import UserCard from '../../components/User/UserCard';
import { getUser } from '../../actions/user';

class User extends Component {
  componentDidMount() {
    this.props.getUser();
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
    user: state.userReducer
  };
};

export default connect(mapStateToProps, { getUser })(User);

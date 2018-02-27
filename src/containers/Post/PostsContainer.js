import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from '../../components/Post/Posts';
import UserPosts from '../../containers/Post/UserPosts';
import UserConnectionsPosts from '../../containers/Post/UserConnectionsPosts';
import {
  getPosts,
  getUserPosts,
  getUserConnectionsPosts,
  getCurrentUserPosts
} from '../../actions/posts';

class PostsContainer extends Component {
  componentDidMount() {
    switch (this.props.location.pathname) {
      case '/home':
        this.props.getCurrentUserPosts();
        return;
      case '/posts':
        this.props.getPosts();
        return;
      case '/postFeed':
        this.props.getUserConnectionsPosts();
        return;
      // Default case is UserPosts
      default:
        this.props.getUserPosts(this.props.userId);
        return;
    }
  }

  render() {
    return (
      <div className="posts-container">
        {this.props.postType === 'posts' ? (
          <Posts posts={this.props.posts} />
        ) : (
          ''
        )}
        {this.props.postType === 'postFeed' ? (
          <UserConnectionsPosts posts={this.props.posts} />
        ) : (
          <UserPosts posts={this.props.posts} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer
  };
};

export default connect(mapStateToProps, {
  getPosts,
  getUserPosts,
  getUserConnectionsPosts,
  getCurrentUserPosts
})(PostsContainer);

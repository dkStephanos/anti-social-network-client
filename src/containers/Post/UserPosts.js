import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import PostCard from '../../components/Post/PostCard';
import { getCurrentUserPosts, getUserPosts } from '../../actions/posts';
import './UserPosts.css';

class UserPosts extends Component {
  componentDidMount() {
    if (this.props.userid) {
      this.props.getUserPosts(this.props.userid);
    } else {
      this.props.getCurrentUserPosts();
    }
  }

  render() {
    const posts = this.props.posts.map(post => (
      <div className="postCard">
        <PostCard key={post.id} post={post} />
      </div>
    ));

    return (
      <div>
        <h1>User's Posts</h1>
        <div className="userPosts">{posts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer
  };
};

export default connect(mapStateToProps, { getCurrentUserPosts, getUserPosts })(
  UserPosts
);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import PostCard from '../../components/Post/PostCard';
import { getUserPosts } from '../../actions/posts';

class UserPosts extends Component {
  componentDidMount() {
    this.props.getUserPosts();
  }

  render() {
    const posts = this.props.posts.map(post => (
      <PostCard key={post.id} post={post} />
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

export default connect(mapStateToProps, { getUserPosts })(UserPosts);

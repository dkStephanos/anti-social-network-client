import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from '../containers/PostForm';
import PostCard from '../components/PostCard';
import { getPosts } from '../actions/posts';

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    debugger;
    const posts = this.props.posts.map(post => (
      <PostCard key={post.id} post={post} />
    ));

    return (
      <div>
        <h1>Posts Page</h1>
        <div className="posts">{posts}</div>
        <PostForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer
  };
};

export default connect(mapStateToProps, { getPosts })(Posts);

import React, { Component } from 'react';

import PostForm from '../containers/PostForm';
import PostCard from '../components/PostCard';

class Posts extends Component {
  render() {
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

export default Posts;

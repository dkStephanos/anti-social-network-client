import React from 'react';
import PostCard from '../components/PostCard';

const Posts = props => {
  const posts = props.posts.map(post => <PostCard post={post} />);

  return (
    <div>
      <h1>Posts Page</h1>
      <div class="posts">{posts}</div>
    </div>
  );
};

export default Posts;

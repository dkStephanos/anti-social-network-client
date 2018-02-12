import React from 'react';

const Posts = props => {
  const posts = props.posts.map((post, index) => (
    <li key={post.id}>
      <p>{post.content}</p>
    </li>
  ));

  return (
    <div>
      <h1>Posts Page</h1>
      <div class="posts">
        <ul>{posts}</ul>
      </div>
    </div>
  );
};

export default Posts;

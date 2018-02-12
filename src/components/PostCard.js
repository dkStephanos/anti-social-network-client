import React from 'react';

const PostCard = ({ post }) => (
  <div key={post.id}>
    <p>{post.content}</p>
  </div>
);

export default PostCard;

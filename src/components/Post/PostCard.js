import React from 'react';
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button/Button';

const PostCard = ({ post }) => (
  <Card style={{ width: '350px' }}>
    <CardTitle
      avatar={post.user.avatar_url}
      title={post.user.login}
      subtitle={post.user.name}
    />
    <CardMedia aspectRatio="wide" image={post.photo} />
    <CardTitle title={post.title} />
    <CardText>{post.content}</CardText>
    <CardActions>
      <Button label="Add Comment" />
    </CardActions>
  </Card>
);

export default PostCard;

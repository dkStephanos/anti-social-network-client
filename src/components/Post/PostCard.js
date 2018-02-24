import React from 'react';
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button/Button';
import './PostCard.css';

const localHost = 'http://localhost:3001';

const PostCard = ({ post }) => (
  <div className="post-card-container">
    <div className="post-content">
      <Card className="post-card">
        <CardTitle
          avatar={post.user.avatar_url}
          title={post.user.login}
          subtitle={post.user.name}
        />
        <CardMedia
          aspectRatio="wide"
          image={`${localHost}${post.picture.url}`}
        />
        <CardTitle title={post.title} />
        <CardText>{post.content}</CardText>
        <CardActions>
          <Button
            onClick={this.handleAddComment}
            className="add-comment-button"
            label="Add Comment"
          />
        </CardActions>
      </Card>
    </div>
    <div className="comments" />
  </div>
);

export default PostCard;

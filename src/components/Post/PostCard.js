import React, { Component } from 'react';
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';
import './PostCard.css';

const localHost = 'http://localhost:3001';

class PostCard extends Component {
  redirectToShowPage = post => {
    window.location.replace(`/posts/${post.id}`);
  };

  render() {
    let { post, square } = this.props;
    return (
      <div className="post-card-container">
        <div className="post-content">
          <Card className="post-card">
            <CardTitle
              avatar={post.user.avatar_url}
              title={post.user.login}
              subtitle={post.user.name}
              onClick={() => this.redirectToShowPage(post)}
              className="post-card-title"
            />
            <CardMedia
              aspectRatio={square ? 'square' : 'wide'}
              image={`${localHost}${post.picture.url}`}
            />
            <CardTitle title={post.title} />
            <CardText>{post.content}</CardText>
            <CardActions />
          </Card>
        </div>
        <div className="comments" />
      </div>
    );
  }
}

export default PostCard;

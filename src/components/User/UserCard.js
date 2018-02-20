import React from 'react';
import logo from '../../logo.svg';
import './UserCard.css';

import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';

const UserCard = ({ user }) => (
  <Card className="UserCard" raised>
    <CardTitle avatar={logo} subtitle={user.name} title={user.login} />
    <CardMedia
      className="UserAvatar"
      aspectRatio="square"
      image={user.avatar_url}
    />
    <CardText>{user.bio}</CardText>
    <CardActions />
  </Card>
);

export default UserCard;

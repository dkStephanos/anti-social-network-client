import React from 'react';
import logo from '../logo.svg';
import './UserCard.css';

import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button/Button';

const UserCard = ({ user }) => (
  <Card className="UserCard" raised accent>
    <CardTitle avatar={logo} title={user.name} />
    <CardMedia
      className="UserAvatar"
      aspectRatio="square"
      image={user.avatar_url}
    />
    <CardText>{user.bio}</CardText>
    <CardActions>
      <Button label="Add Friend" />
    </CardActions>
  </Card>
);

export default UserCard;

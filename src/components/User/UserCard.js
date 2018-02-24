import React from 'react';
import logo from '../../logo.svg';
import './UserCard.css';
import Button from 'react-toolbox/lib/button/Button';

import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';

const UserCard = ({ user, isConnected, handleAddConnection }) => (
  <Card className="UserCard" raised>
    <CardTitle avatar={logo} subtitle={user.name} title={user.login} />
    <CardMedia
      className="UserAvatar"
      aspectRatio="square"
      image={user.avatar_url}
    />
    <CardText>{user.bio}</CardText>
    <CardActions>
      {isConnected ? (
        ''
      ) : (
        <Button
          className="add-connection-button"
          userid={user.id}
          onClick={handleAddConnection}
        >
          Add Connection
        </Button>
      )}
    </CardActions>
  </Card>
);

export default UserCard;

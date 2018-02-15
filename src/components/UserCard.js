import React from 'react';

import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions
} from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button/Button';

const UserCard = ({ user }) => (
  <Card style={{ width: '350px' }}>
    <CardMedia aspectRatio="wide" image={user.avatar_url} />
    <CardTitle title={user.username} />
    <CardText>{user.bio}</CardText>
    <CardActions>
      <Button label="Action 1" />
      <Button label="Action 2" />
    </CardActions>
  </Card>
);

export default UserCard;

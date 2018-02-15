import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Posts from '../containers/Posts';
import User from '../containers/User';

const Main = () => (
  <div>
    <Button raised primary>
      Hi!
    </Button>
    <User />
    <Posts />
  </div>
);

export default Main;

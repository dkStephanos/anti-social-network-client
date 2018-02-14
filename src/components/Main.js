import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Posts from '../containers/Posts';

const Main = () => (
  <div>
    <Button raised primary>
      Hi!
    </Button>
    <Posts />
  </div>
);

export default Main;

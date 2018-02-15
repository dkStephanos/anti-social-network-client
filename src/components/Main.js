import React from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Posts from '../containers/Posts';
import UserProfile from '../containers/UserProfile';

const Main = () => (
  <div>
    <UserProfile />
    <Posts />
  </div>
);

export default Main;

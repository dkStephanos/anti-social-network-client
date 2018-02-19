import React from 'react';
import User from '../../containers/User/User';
import Posts from '../../containers/Post/Posts';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="panelContent">
      <div className="userData">
        <User />
      </div>
      <div className="userConnectionsPosts">
        <Posts />
      </div>
    </div>
  );
};

export default UserProfile;

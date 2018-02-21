import React from 'react';
import User from '../../containers/User/User';
import UserPosts from '../../containers/Post/UserPosts';
import PostForm from '../../containers/Post/PostForm';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="panelContent">
      <div className="userData">
        <User className="userCard" />
      </div>
      <div className="userConnectionsPosts">
        <UserPosts />
      </div>
      <div className="postFormCard">
        <PostForm className="postForm" />
      </div>
    </div>
  );
};

export default UserProfile;

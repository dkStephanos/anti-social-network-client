import React from 'react';
import User from '../../containers/User/User';
import UserPosts from '../../containers/Post/UserPosts';
import PostForm from '../../containers/Post/PostForm';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="user-profile-content">
      <div className="user-profile-data">
        <User className="user-card" />
      </div>
      <div className="user-connections-posts">
        <UserPosts />
      </div>
      <div className="post-form-card">
        <PostForm className="post-form" />
      </div>
    </div>
  );
};

export default UserProfile;

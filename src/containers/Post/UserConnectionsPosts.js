import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostForm from './PostForm';
import PostCard from '../../components/Post/PostCard';
import { getUserConnectionsPosts } from '../../actions/posts';
import './UserConnectionsPosts.css';

class UserConnectionsPosts extends Component {
  componentDidMount() {
    this.props.getUserConnectionsPosts();
  }

  render() {
    debugger;
    const posts = this.props.posts.map(post => (
      <PostCard key={post.id} post={post} />
    ));

    return (
      <div>
        <h1>Post Feed</h1>
        <div className="usersConnectionsPosts">{posts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.postReducer
  };
};

export default connect(mapStateToProps, { getUserConnectionsPosts })(
  UserConnectionsPosts
);

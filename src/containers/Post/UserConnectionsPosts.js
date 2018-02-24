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
      <div className="connections-posts-list-item">
        <PostCard key={post.id} post={post} />
      </div>
    ));

    return (
      <div>
        <div className="connections-posts-list">
          <h1>Post Feed</h1>
          <div className="connections-posts">{posts}</div>
        </div>
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

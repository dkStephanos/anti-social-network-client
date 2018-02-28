import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostCard from '../../components/Post/PostCard';
import CommentForm from '../Comment/CommentForm';
import { getPostById } from '../../actions/posts';
import './PostShow.css';

class PostShow extends Component {
  componentDidMount() {
    this.props.getPostById(this.props.postId);
  }

  render() {
    return (
      <div className="post-show-content">
        <div className="post-show-data">
          {this.props.post.title === undefined ? (
            ''
          ) : (
            <PostCard
              className="post-card"
              post={this.props.post}
              square={true}
            />
          )}
        </div>
        <div className="comment-form-card">
          <CommentForm />
        </div>
        <div className="post-comments" />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.postReducer.post,
    postId: ownProps.match.params.postId
  };
};

export default connect(mapStateToProps, { getPostById })(PostShow);

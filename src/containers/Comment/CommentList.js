import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComments } from '../../actions/comments';
import './Posts.css';

class Comments extends Component {
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    debugger;
    const comments = this.props.comments.map(comment => (
      <div className="comments-list-item">
        <p key={comment.id}>
          <strong>{comment.username}:</strong> {comment.content}
        </p>
      </div>
    ));

    return (
      <div>
        <div className="comments-list">
          <h1>Comments</h1>
          <div className="comments">{comments}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.commentReducer.comments
  };
};

export default connect(mapStateToProps, { getComments })(Comments);

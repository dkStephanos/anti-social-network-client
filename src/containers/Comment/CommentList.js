import React, { Component } from 'react';
import UserChip from '../../components/User/UserChip';
import { connect } from 'react-redux';
import { getComments } from '../../actions/comments';
import './CommentList.css';

class CommentList extends Component {
  componentDidMount() {
    this.props.getComments(this.props.postId);
  }

  render() {
    debugger;
    let commentListItems = [];
    if (this.props.comments) {
      commentListItems = this.props.comments.map(comment => (
        <div className="comments-list-item-container">
          <div className="comments-list-item">
            <UserChip className="comment-user-chip" user={comment.user} />
            <p className="comment-body" key={comment.id}>
              {comment.body}
            </p>
          </div>
        </div>
      ));
    } else {
      commentListItems <<
        (
          <div className="comments-list-item">
            <p>
              <strong>No Comments</strong>
            </p>
          </div>
        );
    }

    return (
      <div>
        <div className="comments-list">
          <h1>Comments</h1>
          <div className="comments">{commentListItems}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.commentReducer
  };
};

export default connect(mapStateToProps, { getComments })(CommentList);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCommentFormData } from '../../actions/commentForm';
import { createComment } from '../../actions/comments';

class CommentForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentCommentFormData = Object.assign(
      {},
      this.props.postCommentData,
      {
        [name]: value
      }
    );
    this.props.updateCommentFormData(currentCommentFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.props.commentFormData);
  };

  render() {
    const { content } = this.props.commentFormData;

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="content">Comment:</label>
            <textarea
              onChange={this.handleOnChange}
              name="content"
              value={content}
            />
          </div>
          <button type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    commentFormData: state.postFormReducer
  };
};

export default connect(mapStateToProps, {
  updateCommentFormData,
  createComment
})(CommentForm);

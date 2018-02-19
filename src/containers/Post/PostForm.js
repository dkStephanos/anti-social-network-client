import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePostFormData } from '../../actions/postForm';
import { createPost } from '../../actions/posts';

class PostForm extends Component {
  handleOnChange = event => {
    const { name, value } = event.target;
    const currentPostFormData = Object.assign({}, this.props.postFormData, {
      [name]: value
    });
    this.props.updatePostFormData(currentPostFormData);
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPost(this.props.postFormData);
  };

  render() {
    const { content } = this.props.postFormData;

    return (
      <div>
        Add A Post
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="content">Content:</label>
            <textarea
              onChange={this.handleOnChange}
              name="content"
              value={content}
            />
          </div>
          <button type="submit">Add Post</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postFormData: state.postFormReducer
  };
};

export default connect(mapStateToProps, {
  updatePostFormData,
  createPost
})(PostForm);

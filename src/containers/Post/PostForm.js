import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updatePostFormData,
  removeSelectedImage,
  changeSelectedImage
} from '../../actions/postForm';
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

  handleRemoveImage = () => {
    this.props.removeSelectedImage();
  };

  handleImageChange = () => {
    let selectedImage = this.refs.imageUploadField.files[0];
    let reader = new FileReader();

    reader.onloadend = function(e) {
      this.props.changeSelectedImage(selectedImage, reader.result);
    }.bind(this);

    let imageURL = reader.readAsDataURL(selectedImage);
  };

  render() {
    const { title, content } = this.props.postFormData;
    debugger;
    return (
      <div>
        Add A Post
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input onChange={this.handleOnChange} name="title" value={title} />
            <label htmlFor="content">Content:</label>
            <textarea
              onChange={this.handleOnChange}
              name="content"
              value={content}
            />
          </div>

          <div className="form-group">
            <label>Upload Image</label>

            <div>
              <input
                name="image"
                ref="imageUploadField"
                type="file"
                disabled={this.props.postFormStatus.isSubmittingForm}
                accept="image/*"
                id="image"
                onChange={this.handleImageChange}
                className="form-control"
              />
              <label
                disabled={this.props.postFormStatus.isSubmittingForm}
                className="btn btn-success"
                htmlFor="book_covers"
              >
                <span className="glyphicon glyphicon-cloud-upload" />
                &nbsp; &nbsp;
                {'Upload Image'}
              </label>
            </div>

            <div>
              <div className="photo">
                <img
                  width={150}
                  src={
                    this.props.postFormData.imageURL
                      ? this.props.postFormData.imageURL
                      : ''
                  }
                  style={{ alignSelf: 'center' }}
                />
                <div className="remove" onClick={this.handleRemoveImage}>
                  <span
                    style={{ top: 2 }}
                    className="glyphicon glyphicon-remove"
                  />
                </div>
              </div>
              <div className="file-name">
                {this.props.postFormData.selectedImageForUpload.name}
              </div>
            </div>
          </div>

          {this.props.postFormStatus.isSubmittingForm ? (
            <div className="progress">
              <div
                className={
                  'progress-bar progress-bar-info progress-bar-striped' +
                  (this.props.postFormStatus.submitFormProgress < 100
                    ? 'active'
                    : '')
                }
                role="progressbar"
                aria-valuenow={this.props.postFormStatus.submitFormProgress}
                areaValuemin="0"
                areaValuemax="100"
                style={{
                  width: this.props.postFormStatus.submitFormProgress + '%'
                }}
              >
                {this.props.postFormStatus.submitFormProgress}% Complete
              </div>
            </div>
          ) : null}

          <button
            disabled={this.props.postFormStatus.isSubmittingForm}
            type="submit"
          >
            {this.props.postFormStatus.isSubmittingForm ? 'Posting...' : 'Post'}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postFormData: state.postFormReducer.formData,
    postFormStatus: state.postFormReducer.formStatus
  };
};

export default connect(mapStateToProps, {
  updatePostFormData,
  createPost,
  removeSelectedImage,
  changeSelectedImage
})(PostForm);

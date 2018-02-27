import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  updatePostFormData,
  removeSelectedImage,
  changeSelectedImage
} from '../../actions/postForm';
import { createPost } from '../../actions/posts';
import './PostForm.css';

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

    let data = this.props.postFormData;
    data.picture = data.imageURL;
    delete data.imageURL;
    delete data.photo;

    this.props.createPost(data);
  };

  handleRemoveImage = () => {
    this.props.removeSelectedImage();
  };

  handleImageChange = () => {
    let selectedImage = this.refs.imageUploadField.files[0];
    if (selectedImage) {
      let reader = new FileReader();

      reader.onloadend = function(e) {
        this.props.changeSelectedImage(selectedImage, reader.result);
      }.bind(this);

      let imageURL = reader.readAsDataURL(selectedImage);
    }
  };

  render() {
    const { title, content } = this.props.postFormData;
    return (
      <div className="post-form-container">
        <h2>Add A Post</h2>
        <div className="post-form">
          <form
            className="form"
            ref="myForm"
            onSubmit={e => this.handleOnSubmit(e)}
          >
            <div>
              <input
                placeholder="Title"
                className="form-input"
                onChange={this.handleOnChange}
                name="title"
                value={title}
              />
              <textarea
                className="form-input"
                onChange={this.handleOnChange}
                name="content"
                value={content}
                placeholder="Content"
              />
            </div>

            <div className="form-group">
              <div className="image-upload-fields">
                <input
                  name="image"
                  ref="imageUploadField"
                  type="file"
                  disabled={this.props.postFormStatus.isSubmittingForm}
                  accept="image/*"
                  id="image-upload"
                  onChange={this.handleImageChange}
                  className="form-upload-input"
                />
                <label
                  for="image-upload"
                  disabled={this.props.postFormStatus.isSubmittingForm}
                  className="fake-btn"
                >
                  Choose Image
                </label>
                <div className="file-name">
                  {this.props.postFormData.photo.name}
                </div>
              </div>

              <div className="photo-data">
                <div className="photo">
                  <img
                    src={
                      this.props.postFormData.imageURL
                        ? this.props.postFormData.imageURL
                        : ''
                    }
                    alt="To be Uploaded"
                  />
                  <div className="remove" onClick={this.handleRemoveImage}>
                    <span
                      style={{ top: 2 }}
                      className="glyphicon glyphicon-remove"
                    />
                  </div>
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

            <div className="submit">
              <button
                className="submit-button"
                disabled={this.props.postFormStatus.isSubmittingForm}
                type="submit"
              >
                {this.props.postFormStatus.isSubmittingForm
                  ? 'Posting...'
                  : 'Post'}
              </button>
              <div className="ease" />
            </div>
          </form>
        </div>
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

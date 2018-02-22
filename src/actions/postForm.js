// ** Action Creators **
export const updatePostFormData = postFormData => {
  return {
    type: 'UPDATED_DATA',
    postFormData
  };
};

export const resetPostForm = () => {
  return {
    type: 'RESET_POST_FORM'
  };
};

export const removeSelectedImage = () => {
  return {
    type: 'REMOVE_SELECTED_IMAGE'
  };
};

export const changeSelectedImage = (selectedImage, imageURL) => {
  return {
    type: 'CHANGE_SELECTED_IMAGE',
    selectedImage,
    imageURL
  };
};

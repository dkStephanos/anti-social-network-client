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

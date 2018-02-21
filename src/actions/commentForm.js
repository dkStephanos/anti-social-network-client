// ** Action Creators **
export const updateCommentFormData = commentFormData => {
  return {
    type: 'UPDATED_DATA',
    commentFormData
  };
};

export const resetCommentForm = () => {
  return {
    type: 'RESET_COMMENT_FORM'
  };
};

const initialState = {
  content: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATED_COMMENT_DATA':
      return action.commentFormData;

    case 'RESET_COMMENT_FORM':
      return initialState;

    default:
      return state;
  }
};

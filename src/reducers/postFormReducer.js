const initialState = {
  content: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATED_DATA':
      return action.postFormData;

    case 'RESET_POST_FORM':
      return initialState;

    default:
      return state;
  }
};

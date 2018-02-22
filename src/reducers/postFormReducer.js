const initialState = {
  formData: {
    title: '',
    content: '',
    selectedImageForUpload: '',
    imageURL: ''
  },
  formStatus: {
    submitFormProgress: 0,
    isSubmittingForm: false,
    didFormSubmissionComplete: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATED_DATA':
      return Object.assign({}, state, { formData: action.postFormData });

    case 'RESET_POST_FORM':
      return initialState;

    case 'REMOVE_SELECTED_IMAGE':
      return Object.assign({}, state, {
        formData: { ...state.formData, selectedImageForUpload: '' }
      });

    case 'CHANGE_SELECTED_IMAGE':
      return Object.assign({}, state, {
        formData: {
          ...state.formData,
          selectedImageForUpload: action.selectedImage,
          imageURL: action.imageURL
        }
      });

    default:
      return state;
  }
};

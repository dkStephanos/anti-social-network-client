const initialState = {
  posts: [],
  post: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return Object.assign({}, state, { posts: action.posts });

    case 'GET_POST_SUCCESS':
      return Object.assign({}, state, { post: action.post });

    case 'CREATE_POST_SUCCESS':
      return Object.assign({}, state, { posts: [action.post, ...state.posts] });

    default:
      return state;
  }
};

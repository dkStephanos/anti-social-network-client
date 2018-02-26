export default (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS_SUCCESS':
      return action.posts;

    case 'CREATE_POST_SUCCESS':
      return [action.post, ...state];

    default:
      return state;
  }
};

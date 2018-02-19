export default (state = [], action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return action.user;

    case 'GET_USERS_SUCCESS':
      return action.users;

    default:
      return state;
  }
};

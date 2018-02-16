export default (state = [], action) => {
  switch (action.type) {
    case 'GET_CONNECTIONS_SUCCESS':
      return action.connections;

    default:
      return state;
  }
};

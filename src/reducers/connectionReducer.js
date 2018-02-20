export default (state = [], action) => {
  switch (action.type) {
    case 'GET_CONNECTIONS_SUCCESS':
      return action.connections;

    case 'GET_CONNECTIONS_IDS_SUCCESS':
      return action.connectionsIds;

    case 'CREATE_CONNECTION_SUCCESS':
      return state.concat(action.connection);

    default:
      return state;
  }
};

const initialState = {
  connections: [],
  connectionsIds: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONNECTIONS_SUCCESS':
      return Object.assign({}, state, { connections: action.connections });

    case 'GET_CONNECTIONS_IDS_SUCCESS':
      return Object.assign({}, state, {
        connectionsIds: action.connectionsIds
      });

    case 'CREATE_CONNECTION_SUCCESS':
      return Object.assign({}, state, {
        connections: [...state.connections, action.connections]
      });

    default:
      return state;
  }
};

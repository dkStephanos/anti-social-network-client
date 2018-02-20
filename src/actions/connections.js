import { auth } from '../utils/init';

const API_URL = process.env.REACT_APP_API_URL;
const token = auth.getToken();

// ** Action Creators **
const setConnections = connections => {
  return {
    type: 'GET_CONNECTIONS_SUCCESS',
    connections
  };
};

const setConnectionsIds = connectionsIds => {
  return {
    type: 'GET_CONNECTIONS_IDS_SUCCESS',
    connectionsIds
  };
};

const addConnection = connection => {
  return {
    type: 'CREATE_CONNECTION_SUCCESS',
    connection
  };
};

// ** Async Actions **
export const getConnections = () => {
  return dispatch => {
    return fetch(`${API_URL}/userConnections`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(connections => dispatch(setConnections(connections)))
      .catch(error => console.log(error));
  };
};

export const getConnectionsIds = () => {
  return dispatch => {
    return fetch(`${API_URL}/userConnectionsIds`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(connections => dispatch(setConnectionsIds(connections)))
      .catch(error => console.log(error));
  };
};

export const createConnection = connection => {
  return dispatch => {
    return fetch(`${API_URL}/connections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({ connection: connection })
    })
      .then(response => response.json())
      .then(connection => {
        dispatch(addConnection(connection));
      })
      .catch(error => console.log(error));
  };
};

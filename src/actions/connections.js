import { getQueryParams } from '../utils';

const API_URL = process.env.REACT_APP_API_URL;
const params = getQueryParams();

// ** Action Creators **
const setConnections = connections => {
  return {
    type: 'GET_CONNECTIONS_SUCCESS',
    connections
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
        Authorization: `${params.token}`
      }
    })
      .then(response => response.json())
      .then(connections => dispatch(setConnections(connections)))
      .catch(error => console.log(error));
  };
};

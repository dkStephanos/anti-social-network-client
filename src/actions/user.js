import { auth } from '../utils/init';

const API_URL = process.env.REACT_APP_API_URL;
const token = auth.getToken();

// ** Action Creators **
const setUser = user => {
  return {
    type: 'GET_USER_SUCCESS',
    user
  };
};

const setCurrentUser = user => {
  return {
    type: 'GET_CURRENT_USER_SUCCESS',
    user
  };
};

const setUsers = users => {
  return {
    type: 'GET_USERS_SUCCESS',
    users
  };
};

// ** Async Actions **
export const getCurrentUser = () => {
  return dispatch => {
    return fetch(`${API_URL}/currentUser`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(user => dispatch(setCurrentUser(user)))
      .catch(error => console.log(error));
  };
};

export const getUserById = userId => {
  return dispatch => {
    return fetch(`${API_URL}/users/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(user => dispatch(setUser(user)))
      .catch(error => console.log(error));
  };
};

export const getUsers = () => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(users => dispatch(setUsers(users)))
      .catch(error => console.log(error));
  };
};

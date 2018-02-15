import { resetPostForm } from './postForm';
import { getQueryParams } from '../utils';

const API_URL = process.env.REACT_APP_API_URL;
const params = getQueryParams();

// ** Action Creators **
const setUser = user => {
  return {
    type: 'GET_USER_SUCCESS',
    user
  };
};

// ** Async Actions **
export const getUser = () => {
  return dispatch => {
    return fetch(`${API_URL}/current_user`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${params.token}`
      }
    })
      .then(response => response.json())
      .then(user => dispatch(setUser(user)))
      .catch(error => console.log(error));
  };
};

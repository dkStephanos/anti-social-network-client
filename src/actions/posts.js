import { resetPostForm } from './postForm';
import { getQueryParams } from '../utils';

const API_URL = process.env.REACT_APP_API_URL;
const params = getQueryParams();

// ** Action Creators **
const setPosts = posts => {
  return {
    type: 'GET_POSTS_SUCCESS',
    posts
  };
};

const addPost = post => {
  return {
    type: 'CREATE_POST_SUCCESS',
    post
  };
};

// ** Async Actions **
export const getPosts = () => {
  return dispatch => {
    return fetch(`${API_URL}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer: ${params.code}`
      },
      body: JSON.stringify({})
    })
      .then(response => response.json())
      .then(posts => dispatch(setPosts(posts)))
      .catch(error => console.log(error));
  };
};

export const createPost = post => {
  return dispatch => {
    return fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer: ${params.code}`
      },
      body: JSON.stringify({ post: post })
    })
      .then(response => response.json())
      .then(post => {
        dispatch(addPost(post));
        dispatch(resetPostForm());
      })
      .catch(error => console.log(error));
  };
};

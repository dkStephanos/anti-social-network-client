import { resetPostForm } from './postForm';
import { auth } from '../utils/init';

const API_URL = process.env.REACT_APP_API_URL;
const token = auth.getToken();

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
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(posts => dispatch(setPosts(posts)))
      .catch(error => console.log(error));
  };
};

export const getUserPosts = () => {
  return dispatch => {
    return fetch(`${API_URL}/currentUser_posts`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(posts => dispatch(setPosts(posts)))
      .catch(error => console.log(error));
  };
};

export const getUserConnectionsPosts = () => {
  return dispatch => {
    return fetch(`${API_URL}/connections_posts`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
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
        Authorization: `${token}`
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

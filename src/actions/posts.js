import { resetPostForm } from './postForm';

const API_URL = process.env.REACT_APP_API_URL;

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
    return fetch(`${API_URL}/posts`)
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
        'Content-Type': 'application/json'
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

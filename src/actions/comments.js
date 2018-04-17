import { resetCommentForm } from './commentForm';
import { auth } from '../utils/init';

const API_URL = process.env.REACT_APP_API_URL;
const token = auth.getToken();

// ** Action Creators **
const setComments = comments => {
  return {
    type: 'GET_COMMENTS_SUCCESS',
    comments
  };
};

const addComment = comment => {
  return {
    type: 'CREATE_COMMENT_SUCCESS',
    comment
  };
};

// ** Async Actions **
export const getComments = post_id => {
  return dispatch => {
    return fetch(`${API_URL}/posts/${post_id}/comments`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${token}`
      }
    })
      .then(response => response.json())
      .then(comments => dispatch(setComments(comments)))
      .catch(error => console.log(error));
  };
};

export const createComment = comment => {
  return dispatch => {
    return fetch(`${API_URL}/posts/${comment.post_id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`
      },
      body: JSON.stringify({ comment: comment })
    })
      .then(response => response.json())
      .then(comment => {
        dispatch(addComment(comment));
        dispatch(resetCommentForm());
      })
      .catch(error => console.log(error));
  };
};

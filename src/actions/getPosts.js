import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
} from '../constants';
import API from '../api';

const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

const getPostsSuccess = res => ({
  type: GET_POSTS_SUCCESS,
  payload: res,
});

const getPostsError = err => ({
  type: GET_POSTS_ERROR,
  payload: err,
});

export const getPosts = () => dispatch => {
  dispatch(getPostsRequest());
  return API.getPosts()
    .then(({ data }) => {
      dispatch(getPostsSuccess(data))
    })
    .catch(({ message }) => {
      dispatch(getPostsError(message));
    });
};

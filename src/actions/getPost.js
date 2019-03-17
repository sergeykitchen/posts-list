import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
} from '../constants';
import API from '../api';

const getPostRequest = () => ({
  type: GET_POST_REQUEST,
});

const getPostSuccess = res => ({
  type: GET_POST_SUCCESS,
  payload: res,
});

const getPostError = err => ({
  type: GET_POST_ERROR,
  payload: err,
});

export const getPost = id => dispatch => {
  dispatch(getPostRequest());
  API.getPost(id)
    .then(({ data }) => {
      dispatch(getPostSuccess(data))
    })
    .catch(({ message }) => {
      dispatch(getPostError(message));
    });
};
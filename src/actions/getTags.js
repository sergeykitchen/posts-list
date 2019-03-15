import {
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR
} from '../constants';

import Api from '../api';

const getTagsRequest = () => ({
  type: GET_TAGS_REQUEST,
})

const getTagsSuccess = (data) => ({
  type: GET_TAGS_SUCCESS,
  payload: data,
})

const getTagsError = (err) => ({
  type: GET_TAGS_ERROR,
  payload: err.message,
})

export const getTags = () => dispatch => {
  dispatch(getTagsRequest());
  return Api.getTags()
    .then(({ data }) => {
      dispatch(getTagsSuccess(data));
    })
    .catch(({ message }) => {
      dispatch(getTagsError(message));
    })
}
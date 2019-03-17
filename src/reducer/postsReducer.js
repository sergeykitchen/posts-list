import * as R from 'ramda';
import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  SET_FILTER,
} from '../constants';

const defaultState = {
  posts: [],
  loading: false,
  error: null,
  filter: [],
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      }
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GET_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: R.append(payload, state.posts),
      };
    case GET_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default: return state;
  };
};

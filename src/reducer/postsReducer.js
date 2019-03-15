import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
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
    default: return state;
  };
};

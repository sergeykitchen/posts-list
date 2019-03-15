import {
  GET_TAGS_REQUEST,
  GET_TAGS_SUCCESS,
  GET_TAGS_ERROR
} from '../constants';

const initialState = {
  tags: [],
  error: null,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TAGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TAGS_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: [...payload],
      };
    case GET_TAGS_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default: return state;
  };
};
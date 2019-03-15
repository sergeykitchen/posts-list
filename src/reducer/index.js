import {combineReducers} from 'redux';
import posts from './postsReducer';
import tags from './tagsReducer'

export default combineReducers({
  posts,
  tags,
});
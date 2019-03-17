import { createSelector } from 'reselect';

const filterSelector = state => state.posts.filter;
const postsSelector = state => state.posts.posts;

export const filteredPosts = createSelector(
  postsSelector,
  filterSelector,
  (postsSelector, filterSelector) => filterSelector.length === 0
    ? postsSelector
    : postsSelector.filter(post => filterSelector.every(item => post.tags.includes(item))),
);
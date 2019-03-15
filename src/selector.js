import { createSelector } from 'reselect';

const postsFilter = state => state.posts.filter;
const postsSelector = state => state.posts.posts;

export const filteredPosts = createSelector(
  postsSelector,
  postsFilter,
  (postsSelector, postsFilter) => postsFilter.length === 0
    ? postsSelector
    : postsSelector.filter(post => postsFilter.every(item => post.tags.includes(item))),
);
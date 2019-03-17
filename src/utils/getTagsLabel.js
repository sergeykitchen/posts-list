import * as R from 'ramda';

export default (tagsId, tags) => {
  return (
  R.compose(
  R.map(i => i.label),
  R.filter(i => ~R.indexOf(i.id, tagsId))
  ))(tags)};
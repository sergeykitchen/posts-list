import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { connect } from 'react-redux';
import Select from 'react-select';
import { getPosts, setFilter } from '../../actions/getPosts';
import { getTags } from '../../actions/getTags';
import {filteredPosts} from '../../selector';
import PostListItem from '../../components/PostListItem';
import Loader from '../../components/Loader';

class MaimPage extends Component {

  componentDidMount() {
    const { posts, getPosts, getTags } = this.props;
    if (posts.length === 0) {
      getPosts();
      getTags();
    }
  };

  setPosts = () => {
    return this.props.posts.map(item => {
      const tags = R.compose(
        R.map(item => item.label),
        R.filter(i => ~R.indexOf(i.id, item.tags))
      )(this.props.tags);

      return <PostListItem
        key={item.id}
        id={item.id}
        title={item.title}
        tags={tags}
        about={item.about}
      />
    });
  };

  setOptions = () => {
    return R.map(item => (
      { label: item.label, value: item.id, }
    ))(this.props.tags);
  };

  selectHandler = (filter) => {
    this.props.setFilter(R.map(i => i.value, filter));
  }

  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <h2 className="page-title">posts list</h2>
        {
          loading
            ? <Loader />
            : <div>
                <div className="select-container">
                  <Select
                    placeholder="Select the tags..."
                    options={this.setOptions()}
                    isMulti
                    onChange={this.selectHandler}
                  />
                </div>
                <ul>
                  {this.setPosts()}
                </ul>
              </div>
        }
      </div>
    );
  };
};

const mapStateToProps = state => {
  const { tags } = state.tags;
  const loading = state.posts.loading || state.tags.loading;

  return {
    loading,
    posts: filteredPosts(state),
    tags,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
    getTags: () => dispatch(getTags()),
    setFilter: filter => dispatch(setFilter(filter)),
  };
};

MaimPage.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MaimPage);

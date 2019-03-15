import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { getPosts } from '../../actions/getPosts';
import PostListItem from '../../components/PostListItem';
import Loader from '../../components/Loader';

class MaimPage extends Component {

  componentDidMount() {
    const { posts, getPosts } = this.props;
    if (posts.length === 0) {
      getPosts();
    }
  };

  setPosts = () => {
    return this.props.posts.map(item => (
      <PostListItem
        key={item.id}
        id={item.id}
        title={item.title}
        tags={item.tags}
        about={item.about}
      />
    ));
  };

  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <h2 className="page-title">posts list</h2>
        <div className="select-container">
          <Select
            placeholder="Select the tags..."
            options={[]}
          />
        </div>
        {
          loading
            ? <Loader />
            : <ul>
              {this.setPosts()}
            </ul>
        }
      </div>
    );
  };
};

const mapStateToProps = state => {
  const { loading, posts } = state.posts;
  return {
    loading,
    posts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  };
};

MaimPage.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MaimPage);

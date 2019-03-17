import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPost } from '../../actions/getPost';
import getTagsLabel from '../../utils/getTagsLabel';
import AuthorInfoModal from '../../components/AuthorInfoModal';
import Loader from '../../components/Loader';
import Post from '../../components/Post';

export class PostPage extends Component {

  constructor() {
    super();
    this.authorModal = React.createRef();
  }

  componentDidMount() {
    const { getPost, match, currentPost } = this.props;
    if (!currentPost) {
      getPost(match.params.id);
    }
  }

  showModal = () => {
    this.authorModal.current.show();
  }

  render() {
    const { currentPost, loading, tagsLabels } = this.props;
    return (
      <div>
        {loading
          ? < Loader />
          : currentPost &&
          <div>
            <Post showModal={this.showModal} tags={tagsLabels} data={currentPost} />
            <AuthorInfoModal ref={this.authorModal} name={currentPost.name} phone={currentPost.phone} />
          </div>
        }
      </div>
    );
  };
};

PostPage.propTypes = {

}

const mapStateToProps = (state, props) => {
  const { posts, loading } = state.posts;
  const { tags } = state.tags;
  const { id } = props.match.params;
  const currentPost = posts.find(post => post.id === id)
  return {
    loading,
    tagsLabels: currentPost && getTagsLabel(currentPost.tags, tags),
    posts,
    currentPost: currentPost,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: postId => dispatch(getPost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);

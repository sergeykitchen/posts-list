import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/getPosts';

class MaimPage extends Component {

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <div>
        MAIN PAGE
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts()),
  }
}

MaimPage.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(MaimPage);

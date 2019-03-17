import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTags } from './actions/getTags';

class MainLayout extends Component {

  componentDidMount() {
    this.props.getTags();
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTags: () => dispatch(getTags()),
  };
};

export default connect(null, mapDispatchToProps)(MainLayout);

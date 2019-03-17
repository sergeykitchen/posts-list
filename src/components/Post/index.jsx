import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Post = ({ data, tags, showModal }) => {
  return (
    <div className="container">
      <div className="post-container">
        <h2 className="post-container_title">
          {data.title}
        </h2>
        <p className="post-container_tag">
          {
            tags.map((item, index) => (
              <span key={index}>{'#' + item} </span>
            ))
          }
        </p>
        <p className="post-container_text">
          {data.text}
        </p>
        <p className="post-container_name">
          by &nbsp; 
          <span
            onClick={showModal}
          >
            {data.name.first} {data.name.last}
          </span>
        </p>
      </div>
    </div>
  );
};

Post.propTypes = {

};

export default Post;

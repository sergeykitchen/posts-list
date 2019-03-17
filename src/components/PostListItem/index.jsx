import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.scss';

const PostListItem = (props) => {
  const { title, about, tags, id } = props;
  return (
    <li className="list-item">
      <Link to={`post/${id}`} className="list-item_title">{title}</Link>
      <p className="list-item_tag">
        {
          tags.map((item, index) => (
            <span key={index}>{'#' + item} </span>
          ))
        }
      </p>
      <p className="list-item_about">{about}</p>
    </li>
  );
};

PostListItem.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  id: PropTypes.string,
  tags: PropTypes.array,
};

export default PostListItem;

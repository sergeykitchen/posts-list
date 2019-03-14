import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header_container container">
        <Link className="header_link" to="/">home</Link>
      </div>
    </div>
  );
};

export default Header;

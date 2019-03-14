import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../pages/mainPage';
import PostPage from '../pages/postPage';

function Routes() {
  return (
    <div>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/post/:id' component={PostPage} />
    </div>
  );
};

export default Routes;

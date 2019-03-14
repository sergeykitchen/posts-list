import React from 'react';
import {Route} from 'react-router-dom';
import MainPage from '../pages/mainPage';

function Routes() {
  return (
    <div>
      <Route exact path='/' component={MainPage}/>
      <Route exact path='/post/:id' component=""/>
    </div>
  )
}

export default Routes

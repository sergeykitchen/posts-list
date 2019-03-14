import React from 'react';
import {Route} from 'react-router-dom';

function Routes() {
  return (
    <div>
      <Route exact path='/' coponent=""/>
      <Route exact path='/post/:id' coponent=""/>
    </div>
  )
}

export default Routes

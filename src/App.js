import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';

const App = props => {
  return (
    <Router>
      <div>
        <Header/>
        <Routes/>
      </div>
    </Router>
  );
};

export default App

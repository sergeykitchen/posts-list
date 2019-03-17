import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Routes from './routes';
import MainLayout from './MainLayout';

const App = props => {
  return (
    <MainLayout>
      <Router>
        <div>
          <Header />
          <Routes />
        </div>
      </Router>
    </MainLayout>
  );
};

export default App;

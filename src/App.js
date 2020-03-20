import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <Dashboard />
      
    </div>
  );
}

export default App;

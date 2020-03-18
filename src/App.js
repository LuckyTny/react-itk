import React from 'react';
import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Dashboard from './components/Dashboard';


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

import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import Dialogs from './components/Dialogs/Dialogs'


const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      
      <div className='content-wrapper'>
      {/* <Dialogs /> */}
      <Dashboard />
      </div>
    </div>
  );
}

export default App;

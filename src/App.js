import React from 'react';
import './App.css';
import {Route, } from 'react-router-dom';

import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import DashboardContainer from './components/Dashboard/DashboardContainer'

const App = () => {
  return (
        
  <div className='wrapper'>
    <HeaderContainer />
    <Nav />
    <div className='content-wrapper'>
      <Route path='/profile/:userId?' render={ () => <DashboardContainer />}/>
      <Route path='/dialogs' render={ () => <DialogsContainer />}/>
      <Route path='/news' render={ () => <News />}/>
      <Route path='/users' render={ () => <UsersContainer />}/>
      <Route path='/music' render={ () => <Music />}/>
      <Route path='/settings' render={ () => <Settings />}/>
    </div>
  </div>
  );
}

export default App;

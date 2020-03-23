import React from 'react';
import './App.css';
import {Route, BrowserRouter} from 'react-router-dom';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings'



const App = () => {
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <Header />
      <Nav />
      
      <div className='content-wrapper'>
      <Route path='/dialogs' component={Dialogs} />
      <Route path='/profile' component={Dashboard}/>
      <Route path='/news' component={News}/>
      <Route path='/music' component={Music}/>
      <Route path='/settings' component={Settings}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

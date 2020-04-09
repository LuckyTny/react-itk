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


const App = (props) => {
  return (
    
    <BrowserRouter>
    <div className='wrapper'>
      <Header />
      <Nav />
      <div className='content-wrapper'>
      <Route path='/profile' render={ () => <Dashboard dashboardPage={props.state.dashboardPage} 
                                                       addPost={props.addPost}
                                                       updatePostText={props.updatePostText}
                                                       />}/>
      <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} />}/>
      <Route path='/news' render={ () => <News />}/>
      <Route path='/music' render={ () => <Music />}/>
      <Route path='/settings' render={ () => <Settings />}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { react } from '@babel/types';
import NavBar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/User/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Clock from './components/Clock/Clock';
import HeaderContainer from './components/Header/HeaderContainer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/clock' render={() => <Clock />} />
            <Route path='/settings' render={() => <Settings />} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

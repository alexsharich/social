import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
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

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route path='/profile' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/settings' render={() => <Settings />} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { react } from '@babel/types';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/User/UsersContainer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route exact path='/profile' render={() => <Profile />} />
            <Route exact path='/dialogs' render={() => <DialogsContainer />} />
            <Route exact path='/users' render={() => <UsersContainer />} />
            <Route exact path='/music' render={() => <Music />} />
            <Route exact path='/news' render={() => <News />} />
            <Route exact path='/settings' render={() => <Settings />} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

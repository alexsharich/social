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
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/dialogs' component={Dialogs} />
            <Route exact path='/music' component={Music} />
            <Route exact path='/news' component={News} />
            <Route exact path='/settings' component={Settings} />
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}




export default App;

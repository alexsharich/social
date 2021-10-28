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
import { StateDataType } from './state/state';
//import { StateDataType, updateNewPostText } from './state/state';
//import {addPost} from './state/state'


function App(props: StateDataType) {

  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <Header />
          <NavBar />
          <div className='app-wrapper-content'>
            <Route exact path='/profile' render={() => <Profile _state={props._state}
             /*  addPost={props.addPost}
              updateNewPostText={props.updateNewPostText} */
              dispatch={props.dispatch} />} />
            <Route exact path='/dialogs' render={() => <Dialogs _state={props._state} /* addPost={props.addPost} updateNewPostText={props.updateNewPostText} */ dispatch={props.dispatch}/>} />
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

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { react } from '@babel/types';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className='app-wrapper'>
       <Header />
        <NavBar />
        <Profile />
        <Footer />
        </div>
    </div>
  );
}




export default App;

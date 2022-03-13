import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { react } from '@babel/types';
import NavBar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, RouteComponentProps, withRouter } from 'react-router-dom';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/User/UsersContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
import Clock from './components/Clock/Clock';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { WithSuspense } from './hoc/WithSuspense';
import { getAuthUserData } from './state/authReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializeApp } from './state/appReducer';
import { AppStateType } from './state/redux-store';
import { Preloader } from './components/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

type ProfilePropsType = MapStateToProps & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

type PathParamsType = {
  userId: string
}

type MapStateToProps = {
  initialized: boolean
}
type MapDispatchToProps = {
  initializeApp: () => void
}

class App extends React.Component<PropsType>  {

  componentDidMount() {
    this.props.initializeApp()
  }

  if() {
    return <Preloader />
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='app-wrapper'>
            <HeaderContainer />
            <NavBar />
            <div className='app-wrapper-content'>
              <Route path='/profile/:userId?' render={WithSuspense(ProfileContainer)} />
              <Route path='/dialogs' render={WithSuspense(DialogsContainer)} />
              <Route path='/users' render={() => <UsersContainer />} />
              <Route path='/music' render={() => <Music />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/clock' render={() => <Clock mode={'digital'} />} />
              <Route path='/settings' render={() => <Settings />} />
              <Route path='/login' render={() => <Login />} />
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})


export default compose<React.ComponentType>(
  /* withRouter, */
  connect(mapStateToProps, { initializeApp }))(App);

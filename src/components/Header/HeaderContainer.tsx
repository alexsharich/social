import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authAPI, usersAPI } from '../../api/api';
import { getAuthUserData, logout, UserAuthDataType } from '../../state/authReducer';
import { AppStateType } from '../../state/redux-store';
import { authSelector } from '../../state/selectors';

import Header from './Header';
import s from './Header.module.css'

type HeaderContainerPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
  auth: UserAuthDataType
}
type MapDispatchToProps = {
 // getAuthUserData: () => void
  logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
  /* componentDidMount() {
    this.props.getAuthUserData()
  } */
  render() {
    return (
      <Header {...this.props} logout={this.props.logout} />
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    auth: authSelector(state)
  }
}

export default connect(mapStateToProps, {/*  getAuthUserData, */ logout })(HeaderContainer);
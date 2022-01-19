import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { authAPI, usersAPI } from '../../api/api';
import { getAuthUserData, setAuthUserData, UserAuthDataType } from '../../state/authReducer';
import { AppStateType } from '../../state/redux-store';
import Header from './Header';
import s from './Header.module.css'

type HeaderContainerPropsType = MapStateToProps & MapDispatchToProps

type MapStateToProps = {
  auth: UserAuthDataType
}
type MapDispatchToProps = {
  getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
  componentDidMount() {
    this.props.getAuthUserData()
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    auth: state.auth.data
  }
}


export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
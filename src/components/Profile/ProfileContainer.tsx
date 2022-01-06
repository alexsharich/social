import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../state/redux-store';
import { getUserProfile, ProfileUserType, setUserProfile } from '../../state/profileReducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';

type PathParamsType = {
  userId: string
}
type MapStateToProps = {
  profile: ProfileUserType
  isAuth?: boolean
}
type MapDispatchToProps = {
  getUserProfile: (userId: string) => void
}

type ProfilePropsType = MapStateToProps & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    this.props.getUserProfile(userId)
    /* usersAPI.getProfile(userId).then(response => {
      this.props.setUserProfile(response.data)
    }) */
  }
  render() {
    if (!this.props.isAuth) return <Redirect to='/login' />

    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.data.isAuth
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
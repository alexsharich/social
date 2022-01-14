import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../state/redux-store';
import { getStatus, getUserProfile, ProfileUserType, setUserProfile, updateStatus } from '../../state/profileReducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';

type PathParamsType = {
  userId: string
}
type MapStateToProps = {
  profile: ProfileUserType,
  /*   isAuth?: boolean */
  status: string
}
type MapDispatchToProps = {
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
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
    this.props.getStatus(userId)
  }
  render() {
    /*  if (!this.props.isAuth) return <Redirect to='/login' /> */

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    profile: state.profilePage.profile,
    /*  isAuth: state.auth.data.isAuth */
    status: state.profilePage.status
  }
}

/* let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default WithAuthRedirect(connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)); */

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)
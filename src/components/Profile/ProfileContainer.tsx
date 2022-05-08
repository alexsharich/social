import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../state/redux-store';
import { getStatus, getUserProfile, ProfileUserType, savePhoto, saveProfile, setUserProfile, updateStatus } from '../../state/profileReducer';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';
import { profileSelector, statusSelector } from '../../state/selectors';
import { StateDataType } from '../../state/store';
import { ProfileDataFormValuesType } from './ProfileInfo/ProfileStatus/ProfileDataform';

type PathParamsType = {
  userId: string
}
type MapStateToProps = {
  profile: ProfileUserType,
  status: string
}
type MapDispatchToProps = {
  savePhoto: (file: any) => void
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
  saveProfile: (dataForm: ProfileDataFormValuesType) => void
}

type ProfilePropsType = MapStateToProps & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {

  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '14497'
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps: PropsType, prevState: StateDataType) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }
  render() {

    return (
      <Profile {...this.props}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} 
        saveProfile = { this.props.saveProfile }/>
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    profile: profileSelector(state),
    status: statusSelector(state)
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)
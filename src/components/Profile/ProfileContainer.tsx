import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../state/redux-store';
import { ProfileUserType, setUserProfile } from '../../state/profileReducer';

type MapStateToProps = {
profile: ProfileUserType
}
type MapDispatchToProps = {
setUserProfile : (profile: ProfileUserType)=> void
}

type ProfilePropsType = MapStateToProps & MapDispatchToProps

class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
    this.props.setUserProfile(response.data)
    })
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state:AppStateType) : MapStateToProps => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);
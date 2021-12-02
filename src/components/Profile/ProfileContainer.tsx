import React from 'react';
import s from './Profile.module.css';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { AppStateType } from '../../state/redux-store';
import { ProfileUserType, setUserProfile } from '../../state/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type PathParamsType = {
  userId: string
}
type MapStateToProps = {
  profile: ProfileUserType
}
type MapDispatchToProps = {
  setUserProfile: (profile: ProfileUserType) => void
}

type ProfilePropsType = MapStateToProps & MapDispatchToProps
type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
      this.props.setUserProfile(response.data)
    })
  }
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state: AppStateType): MapStateToProps => {
  return {
    profile: state.profilePage.profile
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);
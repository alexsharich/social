import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileUserType } from '../../state/profileReducer';

type ProfilePropsType = {
  isOwner: any
  savePhoto: (file: any) => void
  profile: ProfileUserType
  status: string
  updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
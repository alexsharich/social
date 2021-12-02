import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { ProfileUserType } from '../../state/profileReducer';

type ProfilePropsType = {
profile: ProfileUserType
}

const Profile = (props:ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
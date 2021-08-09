import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { StateDataType } from '../../state/state';




const Profile = (props: StateDataType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost} />
    </div>
  )
}

export default Profile;
import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { StateDataType } from '../../state/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (/* props: StateDataType */) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer /* _state={props._state} */
        /* dispatch={props.dispatch} */
       /*  addPost={props.addPost}
        updateNewPostText={props.updateNewPostText} */ />
    </div>
  )
}

export default Profile;
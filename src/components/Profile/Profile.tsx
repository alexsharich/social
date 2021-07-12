import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={s.content}>
            <img src='https://cdn.wallpapersafari.com/40/65/MI0YJw.jpg' width='100%' ></img>
          <div>
            ava+description
          </div>
          <MyPosts />
        </div>
    )
}

export default Profile;
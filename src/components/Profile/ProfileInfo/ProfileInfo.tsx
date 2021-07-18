import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <img src='https://cdn.wallpapersafari.com/40/65/MI0YJw.jpg' width='100%' className={s.profileInfoAva}></img>
            <div>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;
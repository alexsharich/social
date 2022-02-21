import { profile } from "console";
import React from "react";
import { ProfileUserType } from "../../../state/profileReducer";
import { Preloader } from "../../Preloader/Preloader";
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatus/ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = ({ profile, updateStatus,status }: ProfileInfoPropsType) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src='https://cdn.wallpapersafari.com/40/65/MI0YJw.jpg' width='100%' className={s.profileInfoAva}></img>
            <div className={s.profileContainer}>
                <div className={s.user}>
                    {profile.photos && <img src={profile.photos.small} />}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                    <div className={s.fullName}>{profile.fullName}</div>
                </div>
                <div className={s.userDescription}>
                    <div>
                        <h3 className={s.aboutMe}>About me : {profile.aboutMe}</h3>
                    </div>
                    <div >
                        <h5>Looking for a job : {profile.lookingForAJobDescription}</h5>
                    </div>
                    <div>
                        <ul className={s.contacts}>
                            {profile.contacts?.facebook && <li><a href="#">{profile.contacts?.facebook}</a></li>}
                            {profile.contacts?.github && <li><a href="#">{profile.contacts?.github}</a></li>}
                            {profile.contacts?.instagram && <li><a href="#">{profile.contacts?.instagram}</a></li>}
                            {profile.contacts?.mainLink && <li><a href="#">{profile.contacts?.mainLink}</a></li>}
                            {profile.contacts?.twitter && <li><a href="#">{profile.contacts?.twitter}</a></li>}
                            {profile.contacts?.vk && <li><a href="#">{profile.contacts?.vk}</a></li>}
                            {profile.contacts?.website && <li><a href="#">{profile.contacts?.website}</a></li>}
                            {profile.contacts?.youtube && <li><a href="#">{profile.contacts?.youtube}</a></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
import { profile } from "console";
import React from "react";
import { ProfileUserType } from "../../../state/profileReducer";
import { Preloader } from "../../Preloader/Preloader";
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <img src='https://cdn.wallpapersafari.com/40/65/MI0YJw.jpg' width='100%' className={s.profileInfoAva}></img>
            <div className={s.profileContainer}>
                <div className={s.user}>
                    {props.profile.photos && <img src={props.profile.photos.small} />}
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                    <div className={s.fullName}>{props.profile.fullName}</div>
                </div>
                <div className={s.userDescription}>
                    <div>
                        <h3 className={s.aboutMe}>About me : {props.profile.aboutMe}</h3>
                    </div>
                    <div >
                        <h5>Looking for a job : {props.profile.lookingForAJobDescription}</h5>
                    </div>
                    <div>
                        <ul className={s.contacts}>
                            {props.profile.contacts?.facebook && <li><a href="#">{props.profile.contacts?.facebook}</a></li>}
                            {props.profile.contacts?.github && <li><a href="#">{props.profile.contacts?.github}</a></li>}
                            {props.profile.contacts?.instagram && <li><a href="#">{props.profile.contacts?.instagram}</a></li>}
                            {props.profile.contacts?.mainLink && <li><a href="#">{props.profile.contacts?.mainLink}</a></li>}
                            {props.profile.contacts?.twitter && <li><a href="#">{props.profile.contacts?.twitter}</a></li>}
                            {props.profile.contacts?.vk && <li><a href="#">{props.profile.contacts?.vk}</a></li>}
                            {props.profile.contacts?.website && <li><a href="#">{props.profile.contacts?.website}</a></li>}
                            {props.profile.contacts?.youtube && <li><a href="#">{props.profile.contacts?.youtube}</a></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;
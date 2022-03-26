import { profile } from "console";
import React, { ChangeEvent, useState } from "react";
import { ProfileContactsType, ProfileUserType } from "../../../state/profileReducer";
import { Preloader } from "../../Preloader/Preloader";
import s from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/user.png'
import { ProfileStatus } from "./ProfileStatus/ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatus/ProfileStatusWithHooks";
import { profilePageSelector } from "../../../state/selectors";
import { ProfileDataForm, ProfileDataFormReduxForm, ProfileDataFormValuesType } from "./ProfileStatus/ProfileDataform";

type ProfileInfoPropsType = {
    isOwner: any
    savePhoto: (file: any) => void
    profile: ProfileUserType
    status: string
    updateStatus: (status: string) => void
    saveProfile: (formData: ProfileDataFormValuesType) => void
}

const ProfileInfo = ({ profile, updateStatus, status, isOwner, savePhoto, saveProfile }: ProfileInfoPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }
    const goToEditMode = () => {
        setEditMode(true)
    }
    const onSubmit = (formData: ProfileDataFormValuesType) => {
        saveProfile(formData)
        setEditMode(false)
    }

    return (
        <div className={s.profileContainer}>
            <div className={s.user}>
                {profile.photos && <img className={s.userPhoto} src={profile.photos.small || userPhoto} />}
                {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
                {editMode
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={goToEditMode} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>
        </div>
        /* <div>
            <img src='https://cdn.wallpapersafari.com/40/65/MI0YJw.jpg' width='100%' className={s.profileInfoAva}></img>
            <div className={s.profileContainer}>
                <div className={s.user}>
                    {profile.photos && <img className={s.userPhoto} src={profile.photos.small || userPhoto} />}
                    {isOwner && <input type='file' onChange={onMainPhotoSelected} />}
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
                    <div className={s.fullName}>{profile.fullName}</div>
                </div>
                <div className={s.userDescription}>
                    <div>
                        <h3 className={s.aboutMe}>About me : {profile.aboutMe}</h3>
                    </div>
                    <div >
                        <h5>Looking for a job : {profile.lookingForAJob }</h5>
                        {profile.lookingForAJob && profile.lookingForAJobDescription}
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
        </div> */
    )
}



export type ProfileDataType = {
    profile: ProfileUserType
    isOwner?: boolean
    goToEditMode?: () => void
}

const ProfileData = ({ profile, isOwner, goToEditMode }: ProfileDataType) => {
    return (
        <div >
            {isOwner && <div><button onClick={goToEditMode}>Edit Profile</button></div>}
            <div>
                <b>Full name</b> : {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b> : {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My professional skills </b> : {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me </b> : {profile.aboutMe}
            </div>
            <div>
                <b>Contacts </b> :
                <div className={s.contactsList} >
                    {profile.contacts && Object.keys(profile.contacts).map(key => {
                        //@ts-ignore
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </div>
            </div>
        </div>
    )
}

type ContactPropsType = {
    contactTitle?: any
    contactValue?: string
}

const Contact = (props: ContactPropsType) => {
    return (
        <div>

            <b>{props.contactTitle}</b> {props.contactValue}

        </div>
    )
}

export default ProfileInfo;
import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { ProfileUserType } from '../../../../state/profileReducer'
import { createField, Input, Textarea } from '../../../FormsControls/FormControls'
import { ProfileDataType } from '../ProfileInfo'
import s from '../ProfileInfo.module.css'

export type ProfileDataFormValuesType = {
    fullName: string 
    lookingForAJob: string 
    lookingForAJobDescription: string 
    aboutMe: string 
}
type ProfileDataFormOwnProps = {
    profile: ProfileUserType
    initialValues: any
}


export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormValuesType, ProfileDataFormOwnProps> & ProfileDataFormOwnProps> = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} >
            <div><button >Save</button></div>
            <div>
                <b>Full name</b> : {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job</b> : {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
            </div>
            <div>
                <b>My professional skills </b> : {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me </b> : {createField('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts </b> :
                {/*  <div className={s.contactsList} >
                    {profile.contacts && Object.keys(profile.contacts).map(key => {
                        //@ts-ignore
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </div> */}
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormValuesType, ProfileDataFormOwnProps>({ form: 'edit-form' })(ProfileDataForm)
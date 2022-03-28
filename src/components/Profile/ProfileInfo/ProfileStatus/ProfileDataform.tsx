import React from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'
import { ProfileContactsType, ProfileUserType } from '../../../../state/profileReducer'
import { createField, Input, Textarea } from '../../../FormsControls/FormControls'
import s from '../ProfileInfo.module.css'


export type ProfileDataFormValuesType = {
    fullName: string
    lookingForAJob: string
    lookingForAJobDescription: string
    aboutMe: string
    contacts:ProfileContactsType
}
type ProfileDataFormOwnProps = {
    profile: ProfileUserType
    initialValues: any
}


export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormValuesType, ProfileDataFormOwnProps> & ProfileDataFormOwnProps> = ({ handleSubmit,error, profile }) => {
    return (
        <form onSubmit={handleSubmit} >
            <div><button >Save</button></div>
            {error && <div className={s.formSummaryError}>{error}</div>}
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
                <div className={s.contacts} >
                    {profile.contacts && Object.keys(profile.contacts).map(key => {

                        return <div key={key}>
                            <b>{key} :{createField(key, 'contacts.' + key, [], Input)}</b>
                        </div>
                    })}
                </div>
            </div>
        </form>
    )
}

export const ProfileDataFormReduxForm = reduxForm<ProfileDataFormValuesType, ProfileDataFormOwnProps>({ form: 'edit-profile' })(ProfileDataForm)
import React from 'react';
import s from "./LoginForm.module.css";
import { InjectedFormProps, Field, reduxForm } from 'redux-form';

import { required } from '../../utils/validators/validators';
import { createField, Input } from '../FormsControls/FormControls';

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({ handleSubmit, error }) => {
    return (
        <div className={s.loginForm}>
            <form onSubmit={handleSubmit}>
                {createField('Email', 'email', [required], Input)}
                {/*  <Field placeholder={'Email'}
                        validate={[required]}
                        name={'email'}
                        component={Input} /> */}
                {createField('Password', 'password', [required], Input, { type: 'password' })}
                {/* <Field placeholder={'Password'}
                        validate={[required]}
                        name={'password'}
                        component={Input}
                        type='password' /> */}
                {createField(null, 'rememberMe', [required], Input, { type: 'checkbox' }, 'remember me')}
                {/*  <Field type="checkbox"
                        name={'rememberMe'}
                        component={Input} /> */}
                {error && <div className={s.formSummaryError}>{error}</div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
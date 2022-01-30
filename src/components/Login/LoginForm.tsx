import React from 'react';
import s from "./LoginForm.module.css";
import { InjectedFormProps, Field, reduxForm } from 'redux-form';

import { required } from '../../utils/validators/validators';
import { Input } from '../FormsControls/FormControls';

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div className={s.loginForm}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'}
                        validate={[required]}
                        name={'email'}
                        component={Input} />
                </div>
                <div>
                    <Field placeholder={'Password'}
                        validate={[required]}
                        name={'password'}
                        component={Input}
                        type='password' />
                </div>
                <div>
                    <Field type="checkbox"
                        name={'rememberMe'}
                        component={Input} />
                </div>
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
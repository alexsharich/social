import React from 'react';
import s from "./LoginForm.module.css";
import { InjectedFormProps, Field, reduxForm } from 'redux-form';

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div className={s.loginForm}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'} />
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'} />
                </div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={'input'} />
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
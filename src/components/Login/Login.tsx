import React from "react";
import { FormDataType, LoginForm, LoginReduxForm } from "./LoginForm";
import s from "./LoginForm.module.css"

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {

    }
    return (
        <div className={s.loginBlock}>
            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
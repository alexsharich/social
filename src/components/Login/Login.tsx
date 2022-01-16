import React from "react";
import { LoginForm } from "./LoginForm";
import s from "./LoginForm.module.css"

export const Login = () => {
    return (
        <div className={s.loginBlock}>
            <h3>LOGIN</h3>
            <LoginForm />
        </div>
    )
}
import React from 'react'
import s from "./LoginForm.module.css"

type LoginFormPropsType = {

}

export const LoginForm = (props: LoginFormPropsType) => {
    return (
        <div className={s.loginForm}>
            <form>
                <div>
                    <input placeholder={'Login'} />
                </div>
                <div>
                    <input placeholder={'Password'} />
                </div>
                <div>
                    <input type="checkbox" />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}
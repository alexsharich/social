import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { InjectedFormProps } from "redux-form";
import { login, UserAuthDataType } from "../../state/authReducer";
import { AppStateType } from "../../state/redux-store";
import { isAuthSelector } from "../../state/selectors";
import { StateDataType } from "../../state/store";
import { FormDataType, LoginForm, LoginReduxForm } from "./LoginForm";
import s from "./LoginForm.module.css"

const Login = (props: PropsForLogin) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, true)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={s.loginBlock}>
            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

type MapStateToProps = {
    isAuth: boolean
}
type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, isAuth: boolean) => void
}
type PropsForLogin = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: isAuthSelector(state)
})

export default connect(mapStateToProps, { login })(Login)
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../state/authReducer";
import { AppStateType } from "../../state/redux-store";
import { captchaUrl, isAuthSelector } from "../../state/selectors";
import { LoginFormValuesType, LoginReduxForm } from "./LoginForm";
import s from "./LoginForm.module.css"



const Login: React.FC<MapStateToProps & MapDispatchToProps> = (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, /* true , */formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={s.loginBlock}>
            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

type MapStateToProps = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchToProps = {
    login: (email: string, password: string, rememberMe: boolean, /* isAuth: boolean , */ captcha: string | null) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => ({
    isAuth: isAuthSelector(state),
    captchaUrl: captchaUrl(state),
})

export default connect(mapStateToProps, { login })(Login)
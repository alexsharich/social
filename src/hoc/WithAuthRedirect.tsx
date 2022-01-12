import React, { ComponentType } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { AppStateType } from '../state/redux-store'

type MapStateToPropsType = {
    isAuth?: boolean
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.data.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        let { isAuth, ...restProps } = props

        if (!isAuth) return <Redirect to='/login' />
        return <Component {...restProps as T} />
    }
    let ConectedAuthredirectConmponent = connect(mapStateToProps)(RedirectComponent)
    return ConectedAuthredirectConmponent
}
import { Dispatch } from "redux"
import { stopSubmit } from "redux-form"
import { ThunkAction } from "redux-thunk"
import { authAPI, ResultCodeEnum, securityAPI } from "../api/api"
import { AppStateType } from "./redux-store"

const SET_USER_DATA = 'AUTH/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET-CAPTCHA-URL'

const initialProfileState: UserAuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export type UserAuthDataType = {
    id: number | null | string
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}


type ActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof getCaptchaUrlSuccess>

export type initialProfileStateType = typeof initialProfileState

export const authReducer = (state: initialProfileStateType = initialProfileState, action: ActionsType): UserAuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean/* data:UserAuthDataType *//* id: number, login: string, email: string, isAuth: boolean */) => {
    return {
        type: 'AUTH/SET-USER-DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => {
    return async (dispatch: Dispatch<ActionsType>) => {
        let response = await authAPI.me()
        let { id, email, login } = response.data.data
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null) => {
    return {
        type: 'AUTH/GET-CAPTCHA-URL',
        payload: { captchaUrl }
    } as const
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === ResultCodeEnum.Captcha) {
                dispatch(getCaptchaUrlThunkCreator())
            }
            /*  let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
             dispatch(stopSubmit('login', { error: message })) */
        }
    }
}
export const getCaptchaUrlThunkCreator = (): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        let response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<ActionsType>) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

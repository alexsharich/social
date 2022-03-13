import { Dispatch } from "redux"
import { ThunkAction } from "redux-thunk"
import { authAPI, ResultCodeEnum } from "../api/api"
import { AppStateType } from "./redux-store"

const SET_USER_DATA = 'AUTH/SET-USER-DATA'

const initialProfileState: UserAuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export type UserAuthDataType = {
    id: number | null | string
    email: string | null
    login: string | null
    isAuth: boolean
}

type ActionsType = ReturnType<typeof setAuthUserData>

export type initialProfileStateType = typeof initialProfileState

export const authReducer = (state: initialProfileStateType = initialProfileState, action: ActionsType): UserAuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
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

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, ActionsType> => {
    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(getAuthUserData())
        }
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

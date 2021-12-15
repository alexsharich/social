const SET_USER_DATA = 'SET-USER-DATA'

const initialProfileState = {
    data: {} as UserAuthDataType
}

export type UserAuthDataType = {
    id?: number 
    login?: string 
    email?: string 
    isAuth?: boolean 
}

type ActionsType = ReturnType<typeof setAuthUserData>

export type initialProfileStateType = typeof initialProfileState

export const authReducer = (state: initialProfileStateType = initialProfileState, action: ActionsType): initialProfileStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: { ...action.data, isAuth: true }
            }
        default:
            return state
    }
}

export const setAuthUserData = (data: UserAuthDataType) => {
    return {
        type: 'SET-USER-DATA',
        data
    } as const
}


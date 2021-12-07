const SET_USER_DATA = 'SET-USER-DATA'


const initialProfileState = {
    id: null || 1,
    login: null || '',
    email: null || '',
}

type UserDataType = {
    id: number
    login: string
    email: string
}

type ActionsType = ReturnType<typeof setUserDataAC>

export type initialProfileStateType = typeof initialProfileState

export const authReducer = (state: initialProfileStateType = initialProfileState, action: ActionsType): initialProfileStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

/* export const setUserDataAC = (id: number, login: string, email: string) => {
    return {
        type: 'SET-USER-DATA',
        id: id,
        login: login,
        email: email
    } as const
} */

export const setUserDataAC = (data: UserDataType) => {
    return {
        type: 'SET-USER-DATA',
        data 
    } as const
}

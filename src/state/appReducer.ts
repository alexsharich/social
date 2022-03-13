import { getAuthUserData } from "./authReducer"

const SET_INITIALIZED = 'SET-INITIALIZED'

const initialState: initialStateType = {
    initialized: false
}
type initialStateType = {
    initialized: boolean
}

type ActionsType = ReturnType<typeof initializedSuccess>

export const appReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: 'SET-INITIALIZED',
    } as const
}

export const initializeApp = () => {
    return (dispatch: any) => {
        let promise = dispatch(getAuthUserData())
        promise.then(()=>{
            dispatch(initializedSuccess())
        }
        )
    }
}

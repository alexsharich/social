import { ActionsType } from "./store"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    name: string
    id: number
    photos: PhotoUserType 
    status: string
    followed: boolean
    location: UserLocationType
}
type PhotoUserType = {
    small:string
    large:string
}
type UserLocationType = {
    city: string
    country: string
}

//type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowtAC>

const initialUsersState = {
    users: [] as Array<UserType>

}

export type initialUsersStateType = typeof initialUsersState

export const usersReducer = (state: initialUsersStateType = initialUsersState, action: ActionsType): initialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setusersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}

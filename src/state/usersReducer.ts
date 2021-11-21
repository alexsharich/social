import { ActionsType } from "./store"


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    id: number
    followed: boolean
    photoUrl: string
    fullName: string
    status: string
    location: UserLocationType
}
type UserLocationType = {
    city: string
    country: string
}

//type ActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowtAC>

const initialUsersState = {
    users: [/* 
        {
            id: 1,
            followed: true,
            photoUrl: 'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
            fullName: 'Aleksander',
            status: 'Be happy',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            followed: false,
            photoUrl: 'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
            fullName: 'Sergei',
            status: 'Be happy',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },
        {
            id: 3,
            followed: true,
            photoUrl: 'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
            fullName: 'Pavel',
            status: 'Be happy',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            id: 4,
            followed: true,
            photoUrl: 'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
            fullName: 'Aleksander',
            status: 'Be happy',
            location: {
                city: 'New York',
                country: 'Usa'
            }
        } */
    ] as Array<UserType>

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

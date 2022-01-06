import { Dispatch } from "redux"
import { usersAPI } from "../api/api"
import { AppStateType } from "./redux-store"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING_PROGRESS'

export type UserType = {
    name: string
    id: number
    photos: PhotoUserType
    status: string
    followed: boolean
    location: UserLocationType
}
type PhotoUserType = {
    small: string
    large: string
}
type UserLocationType = {
    city: string
    country: string
}

type ActionsType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

const initialUsersState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [-1],
}

export type initialUsersStateType = typeof initialUsersState

export const usersReducer = (state: initialUsersStateType = initialUsersState, action: ActionsType): initialUsersStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: /* action.totalCount */ 200 /* чтобы не показывать 3000 страниц */
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId: userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId: userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalCount: totalCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING_PROGRESS',
        isFetching: isFetching,
        userId: userId
    } as const
}



export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
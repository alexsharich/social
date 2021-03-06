import { AxiosResponse } from "axios"
import { Dispatch } from "redux"
import { ResultCodeEnum, usersAPI, UserType } from "../api/api"
import { updateObjectInArray } from "../utils/helpers/objectHelper"
import { AppStateType } from "./redux-store"

const FOLLOW = 'USERS/FOLLOW'
const UNFOLLOW = 'USERS/UNFOLLOW'
const SET_USERS = 'USERS/SET-USERS'
const SET_CURRENT_PAGE = 'USERS/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'USERS/SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'USERS/TOGGLE-IS-FOLLOWING_PROGRESS'

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
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: true })
                // users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', { followed: false })
                // users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
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
                totalUsersCount: /* action.totalCount */ 200 /* ?????????? ???? ???????????????????? 3000 ?????????????? */
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
        type: 'USERS/FOLLOW',
        userId: userId
    } as const
}


export const unfollowSuccess = (userId: number) => {
    return {
        type: 'USERS/UNFOLLOW',
        userId: userId
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'USERS/SET-USERS',
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'USERS/SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'USERS/SET-TOTAL-USERS-COUNT',
        totalCount: totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'USERS/TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'USERS/TOGGLE-IS-FOLLOWING_PROGRESS',
        isFetching: isFetching,
        userId: userId
    } as const
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsType>, userId: number, method: any, actionCreator: any) => {
    dispatch(toggleIsFollowingProgress(true, userId))
    let response = await method(userId)
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId))
}
export const follow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        let method = usersAPI.follow.bind(userId)
        let actionCreator = followSuccess

        followUnfollowFlow(dispatch, userId, method, actionCreator)

        /*  dispatch(toggleIsFollowingProgress(true, userId))
         let response = await method(userId)
         if (response.data.resultCode === ResultCodeEnum.Success) {
             dispatch(actionCreator(userId))
         }
         dispatch(toggleIsFollowingProgress(false, userId)) */
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
        let method = usersAPI.unfollow.bind(userId)
        let actionCreator = unfollowSuccess

        followUnfollowFlow(dispatch, userId, method, actionCreator)
        /* dispatch(toggleIsFollowingProgress(true, userId))
        let response = await method(userId)
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleIsFollowingProgress(false, userId)) */
    }
}

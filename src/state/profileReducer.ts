import { Dispatch } from "redux"
import { profileAPI, ResultCodeEnum, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

const initialProfileState = {
    posts: [
        { id: 1, message: 'Hello, how are you', likesCount: '20' },
        { id: 2, message: 'Don,t touch my dog', likesCount: '2' },
        { id: 3, message: 'Hello, John', likesCount: '1000' },
    ] as Array<PostType>,
    profile: {} as ProfileUserType,//////////////////////????
    status: ''
}

type PostType = {
    id: number
    message: string
    likesCount: string
}

export type ProfileContactsType = {
    facebook?: string
    website?: string
    vk?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
    mainLink?: string
}

export type ProfilePhotoType = {
    small: string
    large: string
}

export type ProfileUserType = {
    aboutMe?: string
    contacts?: ProfileContactsType
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    userId: 2
    photos: ProfilePhotoType
}

type ActionsType = ReturnType<typeof addPostAC> | /* ReturnType<typeof updateNewTextAC> | */ ReturnType<typeof setUserProfile> | ReturnType<typeof setStatusAC> | ReturnType<typeof deletePostAC>

export type initialProfileStateType = typeof initialProfileState

export const profileReducer = (state: initialProfileStateType = initialProfileState, action: ActionsType): initialProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: '0',
            }
            return { ...state, posts: [...state.posts, newPost]/* , messageNewPostText: '' */ }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case 'DELETE-POST': {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status: status
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}
export const deletePostAC = (postId: number) => {
    return {
        type: 'DELETE-POST',
        postId: postId
    } as const
}

export const getUserProfile = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatusAC(response.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === ResultCodeEnum.Success) {
                dispatch(setStatusAC(status))
            }
        })
    }
}
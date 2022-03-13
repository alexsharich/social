import { Dispatch } from "redux"
import { profileAPI, ResultCodeEnum, usersAPI } from "../api/api"

const ADD_POST = 'PROFILE/ADD-POST'
const SET_USER_PROFILE = 'PROFILE/SET-USER-PROFILE'
const SET_STATUS = 'PROFILE/SET-STATUS'
const DELETE_POST = 'PROFILE/DELETE-POST'
const SAVE_PHOTO = 'SAVE-PHOTO'

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
    userId: number
    photos: ProfilePhotoType
}

type ActionsType = ReturnType<typeof addPostAC> | /* ReturnType<typeof updateNewTextAC> | */ ReturnType<typeof setUserProfile> | ReturnType<typeof setStatusAC> | ReturnType<typeof deletePostAC> | ReturnType<typeof savePhotoAC>

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
        case DELETE_POST: {
            return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'PROFILE/ADD-POST',
        newPostText: newPostText
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: 'PROFILE/SET-STATUS',
        status: status
    } as const
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'PROFILE/SET-USER-PROFILE',
        profile: profile
    } as const
}
export const deletePostAC = (postId: number) => {
    return {
        type: 'PROFILE/DELETE-POST',
        postId: postId
    } as const
}
export const savePhotoAC = (photos: any) => {
    return {
        type: 'SAVE-PHOTO',
        photos: photos
    } as const
}

export const getUserProfile = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId: number) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatusAC(response.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(setStatusAC(status))
        }
    }
}
export const savePhoto = (file: any) => {
    return async (dispatch: Dispatch<ActionsType>) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === ResultCodeEnum.Success) {
            dispatch(savePhotoAC(response.data.data.photos))
        }
    }
}
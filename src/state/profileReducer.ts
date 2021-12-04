//import { ActionsType } from "./store"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

const initialProfileState = {
    posts: [
        { id: 1, message: 'Hello, how are you', likesCount: '20' },
        { id: 2, message: 'Don,t touch my dog', likesCount: '2' },
        { id: 3, message: 'Hello, John', likesCount: '1000' },
    ] as Array<PostType>,
    messageNewPostText: '',
    profile: null || {} as ProfileUserType //////////////////////????
}
type PostType = {
    id: number
    message: string
    likesCount: string
}
export type ProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfilePhotoType = {
    small: string 
    large: string 
}
export type ProfileUserType = {
    aboutMe: string  | null
    contacts: ProfileContactsType | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: 2
    photos: ProfilePhotoType
}

type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewTextAC> | ReturnType<typeof setUserProfile> 

export type initialProfileStateType = typeof initialProfileState

export const profileReducer = (state: initialProfileStateType = initialProfileState, action: ActionsType): initialProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.messageNewPostText,
                likesCount: '0',
            }
            return { ...state, posts: [...state.posts, newPost], messageNewPostText: '' }
        }
        case UPDATE_NEW_TEXT: {
            return { ...state, messageNewPostText: action.newText }
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state
    }
}

export const addPostAC = (message: string) => {
    return {
        type: 'ADD-POST',
        message: message
    } as const
}
export const updateNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-TEXT',
        newText: newText
    } as const
}
export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile
    } as const
}
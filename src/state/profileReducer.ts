import { ActionsType } from "./store"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

const initialProfileState = {
    posts: [
        { id: 1, message: 'Hello, how are you', likesCount: '20' },
        { id: 2, message: 'Don,t touch my dog', likesCount: '2' },
        { id: 3, message: 'Hello, John', likesCount: '1000' },
    ],
    messageNewPostText: ''
}
type PostType = {
    id: number
    message: string
    likesCount: string
}

//type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewTextAC> 

export type initialProfileStateType = typeof initialProfileState

export const profileReducer = (state: initialProfileStateType = initialProfileState, action: ActionsType): initialProfileStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.messageNewPostText,
                likesCount: '0',
            }
            return {...state, posts: [...state.posts, newPost],messageNewPostText : ''}
        }
        case UPDATE_NEW_TEXT: {
            return {...state, messageNewPostText : action.newText}
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
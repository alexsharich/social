import { ActionsType, PostType } from "./state";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'

export const profileReducer = (state: { posts: any; messageNewPostText: any; }, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getTime(),
                message: state.messageNewPostText,
                likesCount: '0',
            }
            state.posts.push(newPost);
            state.messageNewPostText = ''
            return state

        case UPDATE_NEW_TEXT:
            state.messageNewPostText = action.newText

            return state

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
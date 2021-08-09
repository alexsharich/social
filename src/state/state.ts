import { renderTree } from "../render"

export type StateDataType = {
    state: StateType
    addPost: (message: string) => void
}
 export type StateType = {
    profilePage : PostsType
    dialogsPage: DialogsDataType 
}
type PostsType = {
    posts: Array<PostType>
}
type DialogsDataType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType> 
}
type PostType = {
    id: number
    message: string
    likesCount:  string
}
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}

let state = {
    profilePage: {
        posts: [
            { id: 1 , message: 'Hello, how are you', likesCount: '20' },
            { id: 2 , message: 'Don,t touch my dog', likesCount: '2' },
            { id: 3 , message: 'Hello, John', likesCount: '1000' },
        ]
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Sasha' },
            { id: 2, name: 'Pasha' },
            { id: 3, name: 'Dmitriy' },
            { id: 4, name: 'Kostya' },
            { id: 5, name: 'Sasha' },
        ],
        messagesData: [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'Yes' },
            { id: 3, message: 'Love' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' },
        ]
    },
    sideBar: {}
   
}

export const addPost = (postText: string ) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: '0',
    }
    state.profilePage.posts.push(newPost);
    renderTree(state)
}



export default state;



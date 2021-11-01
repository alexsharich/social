/* let renderTree = () => {
    console.log('state try to change')
} */

/* let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hello, how are you', likesCount: '20' },
            { id: 2, message: 'Don,t touch my dog', likesCount: '2' },
            { id: 3, message: 'Hello, John', likesCount: '1000' },
        ],
        messageNewPostText: ''
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
} */

/* export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: state.profilePage.messageNewPostText,
        likesCount: '0',
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.messageNewPostText = ''
    renderTree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.messageNewPostText = newText
    renderTree()
}

export const subscribe = (observer: () => void) => {
    renderTree = observer;
} */
export type StateDataType = {
    _state: StateType
    /* addPost: (message: string) => void
    updateNewPostText: (newText: string) => void */
    dispatch: (action: ActionsType) => void
}
export type StateType = {
    profilePage: PostsType
    dialogsPage: DialogsDataType
}
type PostsType = {
    posts: Array<PostType>
    messageNewPostText: string
}
type DialogsDataType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newDialogText: string
}
type PostType = {
    id: number
    message: string
    likesCount: string
}
type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
//type ActionsType = AddPostActionType | UpdateNewTextActionType
/* type AddPostActionType = {
    type: 'ADD-POST'
    message: string
}
type UpdateNewTextActionType = {
    type: 'UPDATE-NEW-TEXT'
    newText: string
} */
/* type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewTextActionType = ReturnType<typeof updateNewTextAC> */

type ActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewTextAC> | ReturnType<typeof newDialogTextAC> | ReturnType<typeof sendNewDialogTextAC>
export type StoreType = {
    _state: StateType
    getState: () => StateType
    addPost: (message: string) => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    _renderTree: () => void
    dispatch: (action: ActionsType) => void
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
export const newDialogTextAC = (newDialogText: string) => {
    return {
        type: 'ADD-NEW-DIALOG-TEXT',
        newDialogText: newDialogText
    } as const
}
export const sendNewDialogTextAC = (newDialogTextMessage: string) => {
    return {
        type: 'SEND-NEW-DIALOG-TEXT',
        newDialogTextMessage: newDialogTextMessage
    } as const
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, how are you', likesCount: '20' },
                { id: 2, message: 'Don,t touch my dog', likesCount: '2' },
                { id: 3, message: 'Hello, John', likesCount: '1000' },
            ],
            messageNewPostText: ''
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
            ],
            newDialogText: ''
        }
    },
    getState() {
        return this._state
    },
    addPost(message: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: message,
            likesCount: '0',
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageNewPostText = ''
        this._renderTree()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.messageNewPostText = newText
        this._renderTree()
    },
    subscribe(observer) {
        this._renderTree = observer;
    },
    _renderTree() {
        console.log('state try to change')
    },
    dispatch(action: ActionsType) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.messageNewPostText,
                likesCount: '0',
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.messageNewPostText = ''
            this._renderTree()
        } else if (action.type === 'UPDATE-NEW-TEXT') {
            this._state.profilePage.messageNewPostText = action.newText
            this._renderTree()
        } else if (action.type === 'ADD-NEW-DIALOG-TEXT') {
            this._state.dialogsPage.newDialogText = action.newDialogText
            this._renderTree()
        } else if (action.type === 'SEND-NEW-DIALOG-TEXT') {
            const newDialog: MessageType = {
                id: new Date().getTime(),
                message: action.newDialogTextMessage
            }
            this._state.dialogsPage.messagesData.push(newDialog);
            this._state.dialogsPage.newDialogText = ''
            this._renderTree()
        }
    }

}


export default store;



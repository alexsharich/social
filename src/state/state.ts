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
    addPost: (message: string) => void
    updateNewPostText: (newText: string) => void
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
export type StoreType = {
    _state: StateType
    getState: () => StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    _renderTree: () => void
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
            ]
        }
    },
    getState() {
        return this._state
    },
    addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.messageNewPostText,
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
    }

}
export default store;



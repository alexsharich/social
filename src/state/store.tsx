import { dialogsReducer, newDialogTextAC, sendNewDialogTextAC } from "./dialogsReducer"
import { addPostAC, profileReducer, setUserProfile, updateNewTextAC } from "./profileReducer"
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "./usersReducer"


export type StateDataType = {
    _state: StateType
    dispatch: (action: ActionsType) => void
}
export type StateType = {
    profilePage: PostsType
    dialogsPage: DialogsPageType
}
export type PostsType = {
    posts: Array<PostType>
    messageNewPostText: string
    profile: any //////////////////////////////??????
}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newDialogText: string
}
export type PostType = {
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

export type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewTextAC>
    | ReturnType<typeof newDialogTextAC>
    | ReturnType<typeof sendNewDialogTextAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>

export type StoreType = {
    _state: StateType
    getState: () => StateType
    subscribe: (observer: () => void) => void
    _renderTree: (_state: StateType) => void
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, how are you', likesCount: '20' },
                { id: 2, message: 'Don,t touch my dog', likesCount: '2' },
                { id: 3, message: 'Hello, John', likesCount: '1000' },
            ],
            messageNewPostText: '',
            profile: null //////////////////////????????????????
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
    /* addPost(message: string) {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: message,
            likesCount: '0',
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.messageNewPostText = ''
        this._renderTree()
    }, */
    /* updateNewPostText(newText: string) {
        this._state.profilePage.messageNewPostText = newText
        this._renderTree()
    }, */
    subscribe(observer) {
        this._renderTree = observer;
    },
    _renderTree() {
        console.log('state try to change')
    },
    dispatch(action: ActionsType) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._renderTree(this._state)

        /* if (action.type === 'ADD-POST') {
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
        } */
    }
}


export default store;



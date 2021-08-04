export type StateDataType = {
    state: StateType
}
 type StateType = {
    posts: Array<PostType>
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}
type PostType = {
    message: string
    likesCount: string | number
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
    posts: [
        { message: 'Hello, how are you', likesCount: '20' },
        { message: 'Don,t touch my dog', likesCount: '2' },
        { message: 'Hello, John', likesCount: '1000' },
    ],
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

export default state;
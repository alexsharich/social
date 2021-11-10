import { ActionsType, MessageType } from "./store"

const ADD_NEW_DIALOG_TEXT = 'ADD-NEW-DIALOG-TEXT'
const SEND_NEW_DIALOG_TEXT = 'SEND-NEW-DIALOG-TEXT'

const initialDialogsState = {
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

type initialDialogsStateType = typeof initialDialogsState

export const dialogsReducer = (state: initialDialogsStateType = initialDialogsState, action: ActionsType): initialDialogsStateType => {
    switch (action.type) {
        case ADD_NEW_DIALOG_TEXT:
            state.newDialogText = action.newDialogText
            return state
        case SEND_NEW_DIALOG_TEXT:
            const newDialog: MessageType = {
                id: new Date().getTime(),
                message: action.newDialogTextMessage
            }
            state.messagesData.push(newDialog);
            state.newDialogText = ''
            return state
        default:
            return state
    }
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

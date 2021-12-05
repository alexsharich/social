//import { ActionsType } from "./store"

const UPDATE_NEW_DIALOG_TEXT = 'UPDATE-NEW-DIALOG-TEXT'
const SEND_NEW_DIALOG_TEXT = 'SEND-NEW-DIALOG-TEXT'

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}

type ActionsType = ReturnType <typeof newDialogTextAC> | ReturnType <typeof sendNewDialogTextAC>

const initialDialogsState = {
    dialogsData: [
        { id: 1, name: 'Sasha' },
        { id: 2, name: 'Pasha' },
        { id: 3, name: 'Dmitriy' },
        { id: 4, name: 'Kostya' },
        { id: 5, name: 'Sasha' },
    ] as Array<DialogType>,
    messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'Yes' },
        { id: 3, message: 'Love' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' },
    ] as Array<MessageType>,
    newDialogText: ''
}

export type initialDialogsStateType = typeof initialDialogsState

export const dialogsReducer = (state: initialDialogsStateType = initialDialogsState, action: ActionsType): initialDialogsStateType => {
    switch (action.type) {
        case UPDATE_NEW_DIALOG_TEXT:
            return { ...state, newDialogText: action.newDialogText }
        case SEND_NEW_DIALOG_TEXT:
            const newDialog: MessageType = {
                id: new Date().getTime(),
                message: action.newDialogTextMessage
            }
            return { ...state, messagesData: [...state.messagesData, newDialog], newDialogText: '' }
        default:
            return state
    }
}

export const newDialogTextAC = (newDialogText: string) => {
    return {
        type: 'UPDATE-NEW-DIALOG-TEXT',
        newDialogText: newDialogText
    } as const
}
export const sendNewDialogTextAC = (newDialogTextMessage: string) => {
    return {
        type: 'SEND-NEW-DIALOG-TEXT',
        newDialogTextMessage: newDialogTextMessage
    } as const
}

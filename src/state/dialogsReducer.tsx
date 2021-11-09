import { ActionsType, MessageType } from "./state"

const ADD_NEW_DIALOG_TEXT = 'ADD-NEW-DIALOG-TEXT'
const SEND_NEW_DIALOG_TEXT = 'SEND-NEW-DIALOG-TEXT'

export const dialogsReducer = (state: { dialogsData: { id: number; name: string }[]; messagesData: any; newDialogText: string }, action: ActionsType) => {
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

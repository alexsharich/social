const SEND_NEW_DIALOG_TEXT = 'DIALOGS/SEND-NEW-DIALOG-TEXT'

type MessageType = {
    id: number
    message: string
}
type DialogType = {
    id: number
    name: string
}
type ActionsType = ReturnType<typeof sendNewDialogTextAC>

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
}

export type initialDialogsStateType = typeof initialDialogsState

export const dialogsReducer = (state: initialDialogsStateType = initialDialogsState, action: ActionsType): initialDialogsStateType => {
    switch (action.type) {
        case SEND_NEW_DIALOG_TEXT:
            const newDialog: MessageType = {
                id: new Date().getTime(),
                message: action.newMessageBody
            }
            return { ...state, messagesData: [...state.messagesData, newDialog]/* , newDialogText: '' */ }
        default:
            return state
    }
}

export const sendNewDialogTextAC = (newMessageBody: string) => {
    return {
        type: 'DIALOGS/SEND-NEW-DIALOG-TEXT',
        newMessageBody: newMessageBody
    } as const
}

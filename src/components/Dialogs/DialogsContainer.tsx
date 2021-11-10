import React, { ChangeEvent } from "react";
import { newDialogTextAC, sendNewDialogTextAC } from "../../state/dialogsReducer";
import { StateDataType } from "../../state/store";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import s from './Dialogs.module.css'
import Message from "./Message/Message";



const DialogsContainer = (props: StateDataType) => {

    let state = props._state.dialogsPage

    /* let dialogsElement = props._state.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props._state.dialogsPage.messagesData
        .map(m => <Message message={m.message} />) */

    //let newMessageElement = React.createRef<HTMLTextAreaElement>()

    /* let addNewMessage = () => {
        let textMessage = newMessageElement.current?.value
        alert(textMessage)
    } */
    const changeNewDialogTextHandler = (newDialogText: string) => {
        //let newDialogText = e.currentTarget.value
        props.dispatch(newDialogTextAC(newDialogText))
    }
    const addNewDialog = (newDialogTextMessage: string) => {
        //let newDialogTextMessage = props._state.dialogsPage.newDialogText
        props.dispatch(sendNewDialogTextAC(newDialogTextMessage))
    }

    return <Dialogs changeNewDialogTextHandler={changeNewDialogTextHandler}
        addNewDialog={addNewDialog}
        state={state} />
}

export default DialogsContainer;
import React, { ChangeEvent } from "react";
import { newDialogTextAC, sendNewDialogTextAC } from "../../state/dialogsReducer";
import { StateDataType } from "../../state/store";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";



const Dialogs = (props: StateDataType) => {

    let dialogsElement = props._state.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props._state.dialogsPage.messagesData
        .map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addNewMessage = () => {
        let textMessage = newMessageElement.current?.value
        alert(textMessage)
    }
    const changeNewDialogTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newDialogText = e.currentTarget.value
        props.dispatch(newDialogTextAC(newDialogText))
    }
    const addNewDialog = () => {
        let newDialogTextMessage = props._state.dialogsPage.newDialogText
        props.dispatch(sendNewDialogTextAC(newDialogTextMessage))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props._state.dialogsPage.newDialogText} className={s.newMessageText} onChange={changeNewDialogTextHandler}></textarea>
                <button className={s.newMessageButton} onClick={addNewDialog}>Add Message</button>
            </div>

        </div>
    )
}

export default Dialogs;
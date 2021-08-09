import React from "react";
import { StateDataType } from "../../state/state";

import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";


const Dialogs = (props: StateDataType) => {

    let dialogsElement = props.state.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)
    debugger
    let messagesElements = props.state.dialogsPage.messagesData
        .map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let addNewMessage = () => {
        let textMessage = newMessageElement.current?.value
        alert(textMessage)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea className={s.newMessageText} ref={newMessageElement}></textarea>
                <button className={s.newMessageButton} onClick={addNewMessage}>Add Message</button>
            </div>

        </div>
    )
}

export default Dialogs;
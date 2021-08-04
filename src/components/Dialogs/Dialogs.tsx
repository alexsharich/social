import React from "react";
import { StateDataType } from "../../state/state";

import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import Message from "./Message/Message";


const Dialogs = (props: StateDataType) => {

    let dialogsElement = props.state.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)
    debugger
    let messagesElements = props.state.messagesData
        .map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;
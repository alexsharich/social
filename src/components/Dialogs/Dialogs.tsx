import React, { ChangeEvent } from "react";
import { newDialogTextAC, sendNewDialogTextAC } from "../../state/dialogsReducer";
import { DialogsPageType, PostsType, StateDataType } from "../../state/store";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css'
import { DialogsPropsType } from "./DialogsContainer";
import Message from "./Message/Message";


const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogsData
        .map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.dialogsPage.messagesData
        .map(m => <Message message={m.message} />)

    //let newMessageElement = React.createRef<HTMLTextAreaElement>()

    /* let addNewMessage = () => {
        let textMessage = newMessageElement.current?.value
        alert(textMessage)
    } */
    const onChangeNewDialogTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newDialogText = e.currentTarget.value
        //props.dispatch(newDialogTextAC(newDialogText))
        props.changeNewDialogTextHandler(newDialogText)
    }
    const onAddNewDialog = () => {
        let newDialogTextMessage = props.dialogsPage.newDialogText
        //props.dispatch(sendNewDialogTextAC(newDialogTextMessage))
        props.addNewDialog(newDialogTextMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea value={props.dialogsPage.newDialogText} className={s.newMessageText} onChange={onChangeNewDialogTextHandler}></textarea>
                <button className={s.newMessageButton} onClick={onAddNewDialog}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;
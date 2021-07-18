import React from "react";
import { NavLink } from "react-router-dom";
import { isPropertySignature } from "typescript";
import s from './Dialogs.module.css'

type PropsMessageType = {
    message: string
}
type PropsDialogItemType = {
    name: string
    id: string
}



const DialogItem = (props: PropsDialogItemType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
    )
}

const Message = (props: PropsMessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
            <DialogItem name='Sasha' id='1'/>
            <DialogItem name='Pasha' id='2'/>
            <DialogItem name='Dmitriy' id='3'/>
            <DialogItem name='Kostya' id='4'/>
            <DialogItem name='Sasha' id='5'/>
                
            </div>
            <div className={s.messages}>
                <Message message='Hello' />
                <Message message='Yes' />
                <Message message='Love' />
                <Message message='Yo' />
                <Message message='Yo' />
            </div>
        </div>
    )
}

export default Dialogs;
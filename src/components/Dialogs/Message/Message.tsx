import React from "react";
import s from './../Dialogs.module.css'

type PropsMessageType = {
    id?: number
    message: string
}

const Message = (props: PropsMessageType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message;
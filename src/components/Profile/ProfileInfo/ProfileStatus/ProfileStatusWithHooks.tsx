import React, { ChangeEvent, useEffect, useState } from 'react'
import { StateDataType } from '../../../../state/store'

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksPropsType) => {

    let [editMode, setEditMode] = useState<boolean>(false)
    let [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode &&
                <div><b>Status:</b><span onDoubleClick={activateEditMode}>{props.status || '==='}</span></div>
            }
            {editMode &&
                <div><input autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} value={status} /></div>
            }
        </div>
    )
}
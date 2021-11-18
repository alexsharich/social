import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { initialDialogsStateType, newDialogTextAC, sendNewDialogTextAC } from "../../state/dialogsReducer";
import { AppStateType } from "../../state/redux-store";
import Dialogs from "./Dialogs";

type MapStateToProps = {
    dialogsPage: initialDialogsStateType

}
type MapDispatchToProps = {
    addNewDialog: (newDialogTextMessage: string) => void
    changeNewDialogTextHandler: (newDialogText: string) => void
}
export type DialogsPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addNewDialog: (newDialogTextMessage: string) => {
            dispatch(sendNewDialogTextAC(newDialogTextMessage))
        },
        changeNewDialogTextHandler: (newDialogText: string) => {
            dispatch(newDialogTextAC(newDialogText))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
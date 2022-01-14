import React, { ChangeEvent } from 'react'
import { StateDataType } from '../../../../state/store'

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: StateDataType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div><span onDoubleClick={this.activateEditMode}>{this.props.status || '==='}</span></div>
                }
                {this.state.editMode &&
                    <div><input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} type="text" /></div>
                }
            </div>
        )
    }
}
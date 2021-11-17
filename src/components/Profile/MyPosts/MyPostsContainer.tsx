import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostAC, initialProfileStateType, updateNewTextAC } from '../../../state/profileReducer';
import { AppStateType } from '../../../state/redux-store';
import { PostsType } from '../../../state/store';
import MyPosts from './MyPosts';

type MapStateToProps = {
    profilePage: PostsType
}
type MapDispatchToProps = {
    updateNewPostText: (text: string) => void
    addPost: (message: string) => void
}

export type MypostPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewTextAC(text))
        },
        addPost: (message: string) => {
            dispatch(addPostAC(message))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
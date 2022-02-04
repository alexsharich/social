import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addPostAC } from '../../../state/profileReducer';
import { AppStateType } from '../../../state/redux-store';
import { profilePageSelector } from '../../../state/selectors';
import { PostsType } from '../../../state/store';
import MyPosts from './MyPosts';

type MapStateToProps = {
    profilePage: PostsType
}
type MapDispatchToProps = {
    addPost: (newPostText: string) => void
}

export type MypostPropsType = MapStateToProps & MapDispatchToProps

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profilePage: profilePageSelector(state)
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
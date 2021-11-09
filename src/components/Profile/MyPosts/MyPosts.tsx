import React, { ChangeEvent } from 'react';
import { addPostAC, updateNewTextAC } from '../../../state/profileReducer';
import { StateDataType } from '../../../state/state';

import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props: StateDataType) => {

    let postElement = props._state.profilePage.posts.map(p => <Post message={p.message} likeCounter={p.likesCount} />)

    let addPost = () => {
        let message = props._state.profilePage.messageNewPostText
        //props.addPost(message)
        props.dispatch(addPostAC(message))
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        //props.updateNewPostText(text)
        props.dispatch(updateNewTextAC(text))
    }

    return (
        < div >
            <div className={s.myPostName}>
                My Posts
            </div>
            < div className={s.createTextPost}>
                <textarea
                    onChange={onPostChange}
                    value={props._state.profilePage.messageNewPostText} />
                <div className={s.textAreaButtons}>
                    <button className={s.createPostButton} onClick={addPost}>Add Post</button>
                    <button className={s.removePostButton}>Remove</button>
                </div>
            </div >
            <div className={s.posts}>
                {postElement}
            </div>
        </div >
    )
}

export default MyPosts;
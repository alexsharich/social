import React, { ChangeEvent } from 'react';
import { addPostAC, updateNewTextAC } from '../../../state/profileReducer';
import { PostsType, StateDataType } from '../../../state/store';

import s from './MyPosts.module.css';
import Post from './Post/Post'

type MyPostsType = {
    addPost: (message: string) => void
    updateNewPostText: (text: string) => void
    state: PostsType
}

const MyPosts = (props: MyPostsType) => {

    let postElement = props.state.posts.map(p => <Post message={p.message} likeCounter={p.likesCount} />)

    let onAddPost = () => {
        let message = props.state.messageNewPostText
        props.addPost(message)
        //props.dispatch(addPostAC(message))
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
        //props.dispatch(updateNewTextAC(text))
    }

    return (
        < div >
            <div className={s.myPostName}>
                My Posts
            </div>
            < div className={s.createTextPost}>
                <textarea
                    onChange={onPostChange}
                    value={props.state.messageNewPostText} />
                <div className={s.textAreaButtons}>
                    <button className={s.createPostButton} onClick={onAddPost}>Add Post</button>
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
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        < div >
        <div className={s.myPostName}>
        My Posts
        </div>
            < div className={s.createTextPost}>
                <textarea></textarea>
                <div className={s.textAreaButtons}>
                <button className={s.createPostButton}>Add Post</button>
                <button className={s.removePostButton}>Remove</button>
                </div>
            </div >
            <div className={s.posts}>
                <Post message='Hello, how are you' likeCounter='20'/>
                <Post message='Don,t touch my dog' likeCounter='2'/>
                <Post message='Hello, John' likeCounter='1000'/>
            </div>
        </div >
    )
}

export default MyPosts;
import React from 'react';
import { StateDataType } from '../../../state/state';



import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props: StateDataType) => {


    let postElement = props.state.posts.map(p => <Post message={p.message} likeCounter={p.likesCount} />)
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
                {postElement}
            </div>
        </div >
    )
}

export default MyPosts;
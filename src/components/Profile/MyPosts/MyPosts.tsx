import React, { ChangeEvent } from 'react';
import s from './MyPosts.module.css';
import { MypostPropsType } from './MyPostsContainer';
import Post from './Post/Post'


const MyPosts = (props: MypostPropsType) => {

    let postElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likeCounter={p.likesCount} />)

    let onAddPost = () => {
        let message = props.profilePage.messageNewPostText
        props.addPost(message)
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    return (
        < div >
            <div className={s.myPostName}>
                My Posts
            </div>
            < div className={s.createTextPost}>
                <textarea
                    onChange={onPostChange}
                    value={props.profilePage.messageNewPostText} />
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
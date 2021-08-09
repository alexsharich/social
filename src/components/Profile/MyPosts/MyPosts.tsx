import React from 'react';
import { StateDataType } from '../../../state/state';



import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props: StateDataType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let postElement = props.state.profilePage.posts.map(p => <Post message={p.message} likeCounter={p.likesCount} />)

    let addPost = () => {
     if(newPostElement.current){
        props.addPost(newPostElement.current.value)
        newPostElement.current.value = ''
     }
  
    }

    return (
        < div >
            <div className={s.myPostName}>
                My Posts
            </div>
            < div className={s.createTextPost}>
                <textarea ref={newPostElement}></textarea>
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
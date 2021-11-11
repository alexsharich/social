import React, { ChangeEvent } from 'react';
import { addPostAC, updateNewTextAC } from '../../../state/profileReducer';
import { StateDataType } from '../../../state/store';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPostsContainer = (/* props: StateDataType */) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().profilePage

                //let postElement = props._state.profilePage.posts.map(p => <Post message={p.message} likeCounter={p.likesCount} />)

                let addPost = (message: string) => {
                    //let message = props._state.profilePage.messageNewPostText
                    //props.addPost(message)
                    store.dispatch(addPostAC(message))
                }
                const onPostChange = (text: string/* e: ChangeEvent<HTMLTextAreaElement> */) => {
                    //let text = e.currentTarget.value
                    //props.updateNewPostText(text)
                    store.dispatch(updateNewTextAC(text))
                }
                return <MyPosts addPost={addPost}
                    updateNewPostText={onPostChange}
                    state={state} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
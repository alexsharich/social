import React, { ChangeEvent } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../FormsControls/FormControls';
import s from './MyPosts.module.css';
import { MypostPropsType } from './MyPostsContainer';
import Post from './Post/Post'


const MyPosts = (props: MypostPropsType) => {

    let postElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} likeCounter={p.likesCount} />)

    /* let onAddPost = () => {
        let message = props.profilePage.messageNewPostText
        props.addPost(message)
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    } */

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }
    const onSubmit = (formData: AddNewPostFormProsType) => {
        console.log(formData)
    }
    return (
        < div >
            <div className={s.myPostName}>
                My Posts
            </div>
            < div className={s.createTextPost}>
                <AddNewPostReduxForm onSubmit={onAddPost} />
            </div >
            <div className={s.posts}>
                {postElement}
            </div>
        </div >
    )
}

export type AddNewPostFormProsType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormProsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newPostText' 
            component={Textarea} 
            validate={[required, maxLength10]}
            placeholder={'Post message'}/>
            {/* <textarea
                onChange={onPostChange}
                value={props.profilePage.messageNewPostText} /> */}
            <div className={s.textAreaButtons}>
                <button className={s.createPostButton} /* onClick={onAddPost} */>Add Post</button>
                {/* <button className={s.removePostButton}>Remove</button> */}
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm<AddNewPostFormProsType>({ form: 'profileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;
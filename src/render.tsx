import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  { addPost, StateType } from './state/state';

 

/* export type PostsPropsType = {
  posts: Array<PostType> 
}
type PostType = {
  message: string
  likesCount: string | number
}
export type MessagesPropsType = {
  messagesData: Array<MessageType>
} 
type MessageType = {
  id: number
  message: string
}
type MessagesDataType = {
  dialogsData: Array<MessageType>
}
let messagesData = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'Yes' },
  { id: 3, message: 'Love' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'Yo' },
]
export type DialogsPropsType = {
  dialogsData: Array<DialogType>
} 
type DialogType = {
  id: number
  name: string
}
type dialogsDataType = {
  dialogsData: Array<DialogType>
}
let dialogsData = [
  { id: 1, name: 'Sasha' },
  { id: 2, name: 'Pasha' },
  { id: 3, name: 'Dmitriy' },
  { id: 4, name: 'Kostya' },
  { id: 5, name: 'Sasha' },
]

let posts = [
  {message: 'Hello, how are you', likesCount: '20' },
  {message: 'Don,t touch my dog', likesCount: '2' },
  {message: 'Hello, John', likesCount: '1000' },
] */




export const renderTree =(state: StateType) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

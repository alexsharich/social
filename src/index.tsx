import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import state, { addPost, StateType, subscribe, updateNewPostText } from './state/state';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './state/redux-store';

export const renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App /* _state={store.getState()} dispatch={store.dispatch.bind(store)} *//*  addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} */ />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderTree()
store.subscribe(() => { renderTree() })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import s from './Post.module.css';

type MessageType = {
    message: string
    likeCounter: string | number
}

const Post: React.FC<MessageType> = (props) => {
    return (
        <div className={s.item}>
            <div className={s.postAva}>
                <img src='https://yt3.ggpht.com/ytc/AKedOLSuRmw4hrGnwvc9yQZ3J0unZH_lXHQY3joTHb86rQ=s900-c-k-c0x00ffffff-no-rj'></img>
            </div>
            <div className={s.postMessage}>
                {props.message}
            </div>
            <div>
                <span>like {props.likeCounter}</span>
            </div>
        </div>

    )
}

export default Post;
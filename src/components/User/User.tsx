import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { Preloader } from '../Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import { usersAPI, UserType } from '../../api/api'
import { Paginator } from './Paginator'

type UsersPresntationPropsType = {
    user: UserType
    follow: (buttonId: number) => void
    unfollow: (buttonId: number) => void
    followingProgress: Array<number>
}

export const User = ({ user, followingProgress, follow, unfollow, }: UsersPresntationPropsType) => {

    return (

        <div className={s.userBlock}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={s.userImg} src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                        {user.status}
                    </div>
                </span>
                <div>{user.followed
                    ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>UnFollow</button>
                    : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
                </div>
            </span>
        </div>
    )
}
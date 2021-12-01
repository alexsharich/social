import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { UserType } from '../../state/usersReducer'

type UsersPresntationType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    users: UserType[]
    currentPage: number
    follow: (buttonId: number) => void
    unfollow: (buttonId: number) => void
}

export const UsersPresentation = (props: UsersPresntationType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className={s.buttonsPages}>
                {pages.map(p => {
                    return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}
            </div>

            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userImg} src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div>{
                        u.followed
                            ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                    }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}
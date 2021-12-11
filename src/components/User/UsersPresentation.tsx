import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import { UserType } from '../../state/usersReducer'
import { Preloader } from '../Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

type UsersPresntationPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    users: UserType[]
    currentPage: number
    follow: (buttonId: number) => void
    unfollow: (buttonId: number) => void
    isFetching: boolean
    followingProgress: Array<number>
    toggleIsFollowingProgress : (isFetching: boolean, userId:number) => void
}

export const UsersPresentation = (props: UsersPresntationPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            {props.isFetching ? <Preloader /> : null}

            <div >
                <div className={s.buttonsPages}>
                    {pages.map(p => {
                        return <span onClick={() => { props.onPageChanged(p) }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    })}
                </div>

                {props.users.map(u => <div key={u.id} className={s.userBlock}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={s.userImg} src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>
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
                        <div>{u.followed
                            ? <button disabled={props.followingProgress.some(id=>id === u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "44d5e153-6a8e-4009-97fa-dc87b2117b60"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false,u.id)
                                    })
                            }}>UnFollow</button>
                            : <button disabled={props.followingProgress.some(id=>id ===u.id)} onClick={() => {
                                props.toggleIsFollowingProgress(true,u.id)
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "44d5e153-6a8e-4009-97fa-dc87b2117b60"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowingProgress(false,u.id)
                                    })
                            }}>Follow</button>}
                        </div>
                    </span>
                </div>
                )
                }
            </div>
        </>
    )
}
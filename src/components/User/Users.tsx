import React from 'react'
import { followAC } from '../../state/usersReducer'
import s from './Users.module.css'

import { UsersPropsType } from './UsersContainer'

const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        props.setUsers([{
            id: 1,
            followed: true,
            photoUrl: 'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
            fullName: 'Aleksander',
            status: 'Be happy',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            followed: false,
            photoUrl: 'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
            fullName: 'Sergei',
            status: 'Be happy',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        },
        {
            id: 3,
            followed: true,
            photoUrl: 'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
            fullName: 'Pavel',
            status: 'Be happy',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }
        },
        {
            id: 4,
            followed: true,
            photoUrl: 'https://kubnews.ru/upload/iblock/ba2/ba2cc9fa383e672568a551fe49b46a3f.jpg',
            fullName: 'Aleksander',
            status: 'Be happy',
            location: {
                city: 'New York',
                country: 'Usa'
            }
        }

        ])
    }

    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userImg} src={u.photoUrl} />
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
                            {u.fullName}
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}
export default Users
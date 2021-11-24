import * as axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer'

const Users = (props: UsersPropsType) => {

    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
        debugger   
        props.setUsers()
        })
        
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
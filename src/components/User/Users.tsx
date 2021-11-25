import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer'
import userPhoto from '../../assets/images/user.png'

const Users = (props: UsersPropsType) => {
const getUsers = () => {
    if (props.usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }
}
    
    return (
        <div>
            <button onClick={getUsers}>GET USERS</button>
            {props.usersPage.users.map(u => <div key={u.id}>
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
export default Users
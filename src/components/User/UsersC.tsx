import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userImg} src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </div>
                        <div>{
                            u.followed
                                ? <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                : <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
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
}
export default Users
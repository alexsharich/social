import axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import { UsersPropsType } from './UsersContainer'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number)=> {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={s.buttonsPages}>
                    {pages.map(p=>{
                        return <span onClick={()=>{this.onPageChanged(p)}} className={this.props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    })}
                </div>

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
import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../state/redux-store";
import { followAC, initialUsersStateType, setCurrentPageAC, setTotalUsersCountAC, setusersAC, unfollowAC, UserType } from "../../state/usersReducer";

import { UsersPresentation } from "./UsersPresentation";
import axios from 'axios'

type MapStateToProps = {
    usersPage: initialUsersStateType
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}
export type UsersPropsType = MapStateToProps & MapDispatchToProps


class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return <UsersPresentation totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.usersPage.users}
            currentPage={this.props.currentPage}
        />
    }
}


const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setusersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
//использую классовый компонент из UserC.tsx 
export default UsersContainer;
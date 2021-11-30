import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../state/redux-store";
import { followAC, initialUsersStateType, setCurrentPageAC, setTotalUsersCountAC, setusersAC, unfollowAC, UserType } from "../../state/usersReducer";
import Users from "./UsersC";


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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
//использую классовый компонент из UserC.tsx 
export default UsersContainer;
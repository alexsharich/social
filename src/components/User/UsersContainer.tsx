import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../state/redux-store";
import { follow, getUsersThunkCreator, initialUsersStateType, setCurrentPage, setUsers, toggleIsFollowingProgress, unfollow, UserType } from "../../state/usersReducer";
import { UsersPresentation } from "./UsersPresentation";
import axios from 'axios'


type MapStateToProps = {
    usersPage: initialUsersStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: Array<number>
}
type MapDispatchToProps = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    /* setTotalUsersCount: (totalCount: number) => void */
    /*  toggleIsFetching: (isFetching: boolean) => void */
    /* toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void */
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToProps & MapDispatchToProps


class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount(): void {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

        /* this.props.toggleIsFetching(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            }) */
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)

        /* this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            }) */
    }

    render() {

        return <UsersPresentation totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.usersPage.users}
            currentPage={this.props.currentPage}
            isFetching={this.props.isFetching}
            followingProgress={this.props.followingProgress}
        /* toggleIsFollowingProgress={this.props.toggleIsFollowingProgress} */
        />
    }
}


const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    }
}
/* const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
} */

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, /* setTotalUsersCount, */ /* toggleIsFetching, */ /* toggleIsFollowingProgress, */ getUsersThunkCreator })(UsersAPI)

export default UsersContainer;
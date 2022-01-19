import React, { ChangeEvent } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateType } from "../../state/redux-store";
import { follow, getUsersThunkCreator, initialUsersStateType, setCurrentPage, setUsers, toggleIsFollowingProgress, unfollow, UserType } from "../../state/usersReducer";
import { UsersPresentation } from "./UsersPresentation";

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
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStateToProps & MapDispatchToProps


class UsersAPI extends React.Component<UsersPropsType> {

    componentDidMount(): void {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
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

const UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, /* setTotalUsersCount, */ /* toggleIsFetching, */ /* toggleIsFollowingProgress, */ getUsersThunkCreator })(UsersAPI)

export default UsersContainer;
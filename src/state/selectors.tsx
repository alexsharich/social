import { UserType } from "../api/api"
import { AppStateType } from "./redux-store"

export const getUsersSelector = (state: AppStateType):Array<UserType> => {
    return state.usersPage.users
}
export const pageSizeSelector = (state: AppStateType):number => {
    return state.usersPage.pageSize
}
export const totalUsersCountSelector = (state: AppStateType):number => {
    return state.usersPage.totalUsersCount
}
export const currentPageSelector = (state: AppStateType):number => {
    return state.usersPage.currentPage
}
export const isFetchingSelector = (state: AppStateType):boolean => {
    return state.usersPage.isFetching
}
export const followingProgressSelector = (state: AppStateType): Array<number> => {
    return state.usersPage.followingProgress
}
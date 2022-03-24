import { UserType } from "../api/api"
import { UserAuthDataType } from "./authReducer"
import { initialDialogsStateType } from "./dialogsReducer"
import { ProfileUserType } from "./profileReducer"
import { AppStateType } from "./redux-store"
import { PostsType } from "./store"

export const getUsersSelector = (state: AppStateType): Array<UserType> => {
    return state.usersPage.users
}
export const pageSizeSelector = (state: AppStateType): number => {
    return state.usersPage.pageSize
}
export const totalUsersCountSelector = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}
export const currentPageSelector = (state: AppStateType): number => {
    return state.usersPage.currentPage
}
export const isFetchingSelector = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}
export const followingProgressSelector = (state: AppStateType): Array<number> => {
    return state.usersPage.followingProgress
}
export const profileSelector = (state: AppStateType): ProfileUserType => {
    return state.profilePage.profile
}
export const statusSelector = (state: AppStateType): string => {
    return state.profilePage.status
}
export const profilePageSelector = (state: AppStateType): PostsType => {
    return state.profilePage
}
export const isAuthSelector = (state: AppStateType): boolean => {
    return state.auth.isAuth
}
export const captchaUrl = (state:AppStateType):null|string=>{
    return state.auth.captchaUrl
}
export const authSelector = (state: AppStateType): UserAuthDataType => {
    return state.auth
}
export const dialogsPageSelector = (state: AppStateType): initialDialogsStateType => {
    return state.dialogsPage
}
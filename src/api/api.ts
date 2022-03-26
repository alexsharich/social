import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "44d5e153-6a8e-4009-97fa-dc87b2117b60"
    }
})
export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
    Captcha = 10
}


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post<FollowUnfollowResponseType>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<FollowUnfollowResponseType>(`follow/${userId}`)
    },
    getProfile(userId: number) {
        console.warn('Obsolete method.Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}
export type UserType = {
    name: string
    id: number
    photos: PhotoUserType
    status: string | null
    followed: boolean
}
type PhotoUserType = {
    small: string | null
    large: string | null
}
type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string | number | null
}
type FollowUnfollowResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<ResponseCaptchaType>('/security/get-captcha-url')
    }
}
type ResponseCaptchaType = {
    url: string | null
}


export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<GetProfileResponseType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>(`profile/status/`, { status })
    },
    savePhoto(photoFile: any) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: any) {
        return instance.put('profile', profile)
    }
}

type GetProfileResponseType = {
    userId: number
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: {
        github: string | null
        vk: string | null
        facebook: string | null
        instagram: string | null
        twitter: string | null
        website: string | null
        youtube: string | null
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }
}
type UpdateStatusResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>,
    data: {}
}


export const authAPI = {
    me() {
        return instance.get<MeRespoanseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false/* ,isAuth:boolean */, captcha: string | null) {
        return instance.post<LoginRespoanseType>('auth/login', { email, password, rememberMe/* ,isAuth */, captcha })
    },
    logout() {
        return instance.delete<LogoutResponseType>('auth/login')
    }
}
type MeRespoanseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LoginRespoanseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LogoutResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>,
    data: {}
}


import axios from 'axios'

const instatnce = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "44d5e153-6a8e-4009-97fa-dc87b2117b60"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instatnce.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instatnce.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instatnce.delete(`follow/${userId}`)
    },
}



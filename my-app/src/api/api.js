import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "e9c3e74e-8fd8-4678-9a75-20b768afb84a"
    }
})

export const UsersAPI = {
    getUsersAPI(currentPage, pageSize) {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => { return response.data })
        )
    },
    followAPI(userId) {
        return (
            instance.post(`follow/${userId}`)
                .then(response => { return response.data })
        )
    },
    unfollowAPI(userId) {
        return (
            instance.delete(`follow/${userId}`)
                .then(response => { return response.data })
        )
    },
}

export const ProfileAPI = {
    getUserProfileAPI(userId) {
        return (
            instance.get(`profile/${userId}`)
                .then(response => { return response.data })
        )
    },
    getUserStatusAPI(userId) {
        return (
            instance.get(`profile/status/${userId}`)
                .then(response => { return response.data })
        )
    },
    updateStatusAPI(status) {
        return (
            instance.put(`profile/status`, { status })
                .then(response => { return response.data })
        )
    }
}

export const AuthAPI = {
    setAuthUserDataAPI() {
        return (
            instance.get(`auth/me`)
                .then(response => { return response.data })
        )
    },
    loginUserAPI(email, password, rememberMe) {
        return (
            instance.post(`/auth/login`, { email, password, rememberMe })
                .then(response => { return response.data })
        )
    },
    logoutUserAPI() {
        return (
            instance.delete(`/auth/login`)
                .then(response => { return response.data })
        )
    }
}

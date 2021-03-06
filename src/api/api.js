import Axios from 'axios';

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/";
const API_KEY = "1ce56999-25df-429e-b08d-440ee3013c8a";

const instance = Axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  headers: {
    "API-KEY": API_KEY,
  },
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get((`users?page=${currentPage}&count=${pageSize}`)).then(({ data }) => data);
    },

    followUser(id) {
        return instance.post(`follow/${id}`, {}).then(({ data }) => data);
    },

    unFollowUser(id) {
        return instance.delete(`follow/${id}`).then(({ data }) => data);
    },
}; 

export const profileAPI = {

    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(({ data }) => data);
    },

    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(({ data }) => data);
    },

    updateStatus(status) {
        return instance.put(`profile/status`, { status }).then(({ data }) => data);
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, { headers: {'Content-Type': 'multipart/form-data'}}).then(({ data }) => data);
    },
}; 

export const authAPI = {
    authLogin() {
        return instance.get(`auth/me`).then(({ data }) => data);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(({ data }) => data);
    },

    logout() {
        return instance.delete(`auth/login`).then(({ data }) => data);
    },
};
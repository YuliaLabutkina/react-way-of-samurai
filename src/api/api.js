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

    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(({ data }) => data);
    },
}; 

export const authAPI = {
    authLogin() {
        return instance.get(`auth/me`).then(({ data }) => data);
    },
};
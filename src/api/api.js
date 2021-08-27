import * as axios from 'axios';


const api = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API_KEY": "dffc86a5-2b03-4c22-a34c-0a54837561b1"
        }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return axios.get(`${api}users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => {
                return response.data;
            });
    },
    follow(userId){
       return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
     return   instance.delete(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn('Obsolete method, please use profile API object');
        return profileAPI.getProfile(userId);
     },
}

export const profileAPI = {
    getProfile(userId){
        return axios.get(`${api}profile/${userId}`).then(response => {
            return response.data
        })
     },
     getStatus(userId){
         return instance.get(`profile/status/${userId}`);
     },
     updateStatus(status){
        return axios.put(`${api}profile/status/`,{status: status});
    }
}

export const authAPI = {
    me(){
        return axios.get(api + `auth/me`, {
            withCredentials: true
        })
    }
}

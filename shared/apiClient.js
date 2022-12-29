import axios from "axios";
import { getCookie,deleteCookie } from 'cookies-next'
import { openNotificationWithIcon } from "./openNotification";

export const apiClient = axios.create({
    baseURL: process.env.APP_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

apiClient.interceptors.request.use((config) => {
    
    let user = getCookie('user') && JSON.parse(getCookie('user'))

    if (user) {
        config.headers["Authorization"] = `Bearer ${user.token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

apiClient.interceptors.response.use((config) => {

    return config;
}, (error) => {
    if(error.response){
        if(error.response?.status === 401){
            deleteCookie('user')
            window.location.reload()
        }

        
        if(error.response?.status === 422){
            openNotificationWithIcon('error',error.response?.data?.message)
        }
    }
    return Promise.reject(error.response)
});


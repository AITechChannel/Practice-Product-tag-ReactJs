import axios from 'axios';
import queryString from 'query-string';
import firebase from 'firebase/compat/app';

import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: (params) => queryString.stringify({ ...params, appid: apiConfig.apiKey }),
});

axiosClient.interceptors.request.use(async (config) => {
    // attach token into request header
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
        const token = await currentUser.getIdToken();
        console.log('token user:', token);
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        throw error;
    },
);

export default axiosClient;

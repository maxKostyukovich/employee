import axios from 'axios';

import history from '../../history';
import {STORAGE_KEYS} from "../../constants";

axios.interceptors.request.use(config => {
    const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE);
    if (config.headers.Authorization !== accessToken) {
        config.headers.Authorization = accessToken;
    }
    return config;
}, err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(
    response => {
        return response
    },
    async err => {
        const {config, response: {status, data}} = err;
            if ('Invalid token' === data) {
                removeToken();
                history.push('/login');
            }
            if ("Token expired" === data) {
                removeToken();
                history.push('/login');
            }
        return Promise.reject(err);
    }
);

function removeToken(){
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE);
}
export default axios;
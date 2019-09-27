import {BEARER, STORAGE_KEYS} from "../constants";

export const setTokensToLocalStorage = (res) => {
    if(res) {
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN_TYPE, `${BEARER}${res.data.accessToken}`);
    }
    return res;
};
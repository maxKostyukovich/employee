import axios from './interceptors';
import { loginURL } from '../baseURL';
import { setTokensToLocalStorage } from '../../utils/localStorageUtil';

export const checkLogin = user => axios.post(loginURL, user).then(setTokensToLocalStorage);
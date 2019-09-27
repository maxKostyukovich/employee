import axios from './interceptors'
import {setTokensToLocalStorage} from "../../utils/localStorageUtil";
import {userURL} from "../baseURL";

export const getUser = () => axios.get(userURL);
export const createUser = (user) => axios.post(userURL, user).then(setTokensToLocalStorage);
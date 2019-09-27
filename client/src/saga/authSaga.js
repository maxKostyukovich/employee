import { put, call } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { checkLogin } from '../api/rest/restController';
import { createUser } from "../api/rest/userController";
import history from '../history';

export function* checkLoginUser({ data: newUser }){
    yield put({ type: ACTION.USER_REQUEST });
    try{
        const { data }  = yield checkLogin(newUser);
        yield put({type:ACTION.USER_RESPONSE, user: data.user});
        yield call(history.push,'/');
    }catch(err){
        yield put({type: ACTION.USER_ERROR, err: {
                message: err.response.data,
                status:err.response.status,
            } });
    }
}

export function* createUserSaga({ user }){
    const {passwordConformation, ...newUser}  = user;
    yield put({ type:ACTION.USER_REQUEST });
    try{
        const { data } = yield createUser(newUser);
        yield put({type: ACTION.USER_RESPONSE, user: data.user});
        yield call(history.push, '/');
    } catch(err) {
        yield put({ type: ACTION.USER_ERROR, err: {
                message: err.response.data,
                status:err.response.status,
            }
        });
    }
}

export function* logoutUserSaga(){
    yield put({type: ACTION.LOGOUT_REQUEST});
    localStorage.clear();
    yield call(history.push, '/login');
}
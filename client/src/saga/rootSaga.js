import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { checkLoginUser, createUserSaga, logoutUserSaga } from './authSaga';
import { getUserSaga } from './userSaga'

function* rootSaga() {
    yield takeLatest(ACTION.LOGIN_ACTION, checkLoginUser);
    yield takeLatest(ACTION.SIGN_UP_ACTION, createUserSaga);
    yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
    yield takeLatest(ACTION.LOGOUT_ACTION, logoutUserSaga);
}

export default rootSaga;
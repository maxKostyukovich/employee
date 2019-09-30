import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { checkLoginUser, createUserSaga, logoutUserSaga } from './authSaga';
import { getAllEmployeeSaga, deleteEmployeeByIdSaga, addNewEmployeeSaga } from './employeeSaga'
import { getUserSaga } from './userSaga'

function* rootSaga() {
    yield takeLatest(ACTION.LOGIN_ACTION, checkLoginUser);
    yield takeLatest(ACTION.SIGN_UP_ACTION, createUserSaga);
    yield takeLatest(ACTION.GET_USER_ACTION, getUserSaga);
    yield takeLatest(ACTION.LOGOUT_ACTION, logoutUserSaga);
    yield takeLatest(ACTION.GET_ALL_EMPLOYEES_ACTION, getAllEmployeeSaga);
    yield takeLatest(ACTION.DELETE_EMPLOYEE_ACTION, deleteEmployeeByIdSaga);
    yield takeLatest(ACTION.SAVE_EMPLOYEE_ACTION, addNewEmployeeSaga);

}

export default rootSaga;
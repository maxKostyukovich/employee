import { put } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { getUser} from "../api/rest/userController";
import history from '../history';

export function* getUserSaga() {
    yield put({ type: ACTION.USER_REQUEST });
    try{
        const { data } = yield getUser();
        yield put({type:ACTION.USER_RESPONSE, user: data});
    }catch (err) {
        yield put({type: ACTION.USER_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

import { put, select } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import { getEmployees, deleteEmployeeById, createEmployee } from '../api/rest/employeeController'
import momemt from 'moment'

export function* getAllEmployeeSaga() {
    try{
        const { data } = yield getEmployees();
        yield put({type:ACTION.GET_ALL_EMPLOYEES_RESPONSE, employees: data});
    }catch (err) {
        console.log(err);
        yield put({type: ACTION.EMPLOYEES_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* deleteEmployeeByIdSaga({ _id }) {
    try {
        yield deleteEmployeeById(_id);
        const state = yield select();
        const filteredEmployees = state.employeeReducer.employees.filter(item => item._id !== _id);
        yield put({type:ACTION.GET_ALL_EMPLOYEES_RESPONSE, employees: filteredEmployees});
    }catch (err) {
        yield put({type: ACTION.EMPLOYEES_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}

export function* addNewEmployeeSaga({ employee }) {
    try {
        employee.dateOfBirth = momemt(employee.dateOfBirth).format('YYYY-MM-DD');
        if(employee.dateOfBirth === 'Invalid date'){
            yield put({type: ACTION.EMPLOYEES_ERROR, err: {
                    message: "Invalid date",
                    status: 400,
                } })
        }else{
            const newEmployee = yield createEmployee(employee);
            const state = yield select();
            const filteredEmployees = state.employeeReducer.employees;
            filteredEmployees.push(newEmployee.data);
            console.log(filteredEmployees);
            yield put({type:ACTION.MODAL_FORM_CHANGE_STATUS_ACTION, isActive: false, status: ''});
            yield put({type:ACTION.GET_ALL_EMPLOYEES_RESPONSE, employees: filteredEmployees});
        }

    }catch (err) {
        yield put({type: ACTION.EMPLOYEES_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }

}

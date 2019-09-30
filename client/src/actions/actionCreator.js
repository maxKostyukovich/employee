import ACTION from './actionTypes';
export const loginAction = (data) => ({
    type: ACTION.LOGIN_ACTION,
    data,
});

export const resetErrorAction = () => ({
    type: ACTION.USER_ERROR,
    err: null,
});

export const getUserAction = () => ({
    type: ACTION.GET_USER_ACTION,
});

export const signupAction = (data) => ({
    type: ACTION.SIGN_UP_ACTION,
    user: data,
});

export const logoutAction = () => ({
   type: ACTION.LOGOUT_ACTION,
});

export const getEmployees = () => ({
  type: ACTION.GET_ALL_EMPLOYEES_ACTION,
});

export const deleteEmployeeById = (id) => ({
   type: ACTION.DELETE_EMPLOYEE_ACTION,
    _id: id,
});

export const changeStatusModalFormAction = (isActive,status) => ({
    type: ACTION.MODAL_FORM_CHANGE_STATUS_ACTION,
    isActive,
    status,
});

export const addNewEmployeeAction = (employee) => ({
   type: ACTION.SAVE_EMPLOYEE_ACTION,
   employee,
});


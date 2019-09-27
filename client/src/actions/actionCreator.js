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



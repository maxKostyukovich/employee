import ACTION from '../actions/actionTypes';

const initialState = {
    user: {},
    isFetching: false,
    err: null,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                err: null,
            };
        }
        case ACTION.USER_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                err: null,
                user: action.user
            };
        }
        case ACTION.USER_ERROR: {
            return {
                ...state,
                isFetching: false,
                err: action.err,
            };
        }
        case ACTION.LOGOUT_REQUEST: {
            return {
                ...state,
                ...initialState
            }
        }
        default: {
            return state;
        }
    }
}
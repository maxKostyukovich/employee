import ACTION from '../actions/actionTypes';

const initialState = {
    employees: [],
    err: {},
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_ALL_EMPLOYEES_RESPONSE: {
            return {
                ...state,
                employees: action.employees,
                err: null
            };
        }
        case ACTION.EMPLOYEES_ERROR: {
            return {
                ...state,
                err: action.err
            };
        }
        default: {
            return state;
        }
    }
}
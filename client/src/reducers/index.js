import { combineReducers } from 'redux';
import userReducer from './userReducer'
import employeeReducer from './employeeReducer'
import modalFormReducer from './modalFormReducer'
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
    userReducer,
    employeeReducer,
    modalFormReducer,
    form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
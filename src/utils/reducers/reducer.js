import { combineReducers } from 'redux';
import { login, register } from './auth';

export const reducers = combineReducers({
    login,
    register,
});

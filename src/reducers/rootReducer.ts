// core
import { combineReducers } from 'redux';

// reducers
import authGuardResponse from './authGuard/authGuardReducer';
import loadingResponse from './loading/loadingReducer';
import loginResponse from './login/loginReducer';

export const rootReducer = combineReducers({
	authGuardResponse,
	loadingResponse,
	loginResponse,
});

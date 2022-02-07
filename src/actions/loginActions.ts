// core
import * as api from '@services/loginService';
import * as types from '@constants/actionTypes';

// misc
import { beginApiCall, endApiCall } from './commonActions';
import { Credentials } from '../models/credentials';

export const login = (credentials: Credentials) => {
	return async (dispatch: any) => {
		dispatch(beginApiCall());
		try {
			const response = await api.login(credentials);
			dispatch({ type: types.LOGIN_SUCCESS, response });
		} catch (error) {
			dispatch({ type: types.LOGIN_FAILED, error });
		} finally {
			dispatch(endApiCall());
		}
	};
};

export const setGuard = (value: boolean) => {
	return (dispatch: any) => {
		dispatch({ type: types.SET_GUARD, value });
	};
};

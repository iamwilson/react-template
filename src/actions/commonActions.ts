// core
import * as types from '@constants/actionTypes';

export const beginApiCall = () => ({
	type: types.BEGIN_API_CALL,
});

export const endApiCall = () => ({
	type: types.END_API_CALL,
});

export const apiCallError = () => ({
	type: types.API_CALL_ERROR,
});

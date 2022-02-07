// misc
import * as types from '@constants/actionTypes';
import { IActionModel } from '@interfaces/actionModel';
import { initialState } from '../initialState';

const loginReducer = (state: any = initialState.loginResponse, action: IActionModel) => {
	switch (action.type) {
		case types.LOGIN_SUCCESS:
			return { ...state, ...action.response };
		case types.LOGIN_FAILED:
			return { ...state, ...action.error };
		default:
			return state;
	}
};

export default loginReducer;

// misc
import * as types from '@constants/actionTypes';
import { IActionModel } from '@interfaces/actionModel';
import { initialState } from '../initialState';

const authGuardReducer = (state: any = initialState.authGuardResponse, action: IActionModel) => {
	return action.type === types.SET_GUARD ? action.value : state;
};

export default authGuardReducer;

// misc
import * as sessionHelper from '@utils/sessionHelper';
import { IState } from '@interfaces/state';

export const initialState: IState = {
	authGuardResponse: sessionHelper.getAuthGuard(),
	genericResponse: {},
	loadingResponse: 0,
	loginResponse: {},
};

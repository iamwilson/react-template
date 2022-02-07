// config
import * as appSetting from '@configs';

// models
import { Credentials } from '@models/credentials';

// misc
import * as genericService from './generic/loginService';
import * as mockService from './mock/mockService';

export const login = (credentials: Credentials) => {
	switch (appSetting.config.mode) {
		case appSetting.ONLINE:
			return genericService.login(credentials);
		case appSetting.OFFLINE:
			return mockService.login(credentials);
		default: {
			return genericService.login(credentials);
		}
	}
};

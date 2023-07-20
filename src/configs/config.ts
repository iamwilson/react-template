// misc
import * as sessionHelper from '@utils/sessionHelper';
import { AxiosConfigs } from '@interfaces/reduxModel';

// client manifest
export const APP_NAME = 'MoodPulse';
export const CLIENT_ID = 'id';
export const CLIENT_SECRET = '$secret';

// date format
export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm';

// endpoints
export const AUTH_URL = '';
export const OFFLINE_URL = '';
export const ONLINE_URL = '';
export const TEST_URL = '';

// language
export const ENG = 'en';
export const SWE = 'sw';

// mode
export const OFFLINE = 'offline';
export const ONLINE = 'online';
export const TEST = 'test';

// theme
export const DARK_MODE = 'dark';
export const LIGHT_MODE = 'light';

export const config = {
	apiDelay: 300,
	auth: AUTH_URL,
	dateFormat: DATE_FORMAT,
	dateTimeFormat: DATE_TIME_FORMAT,
	domain: '',
	language: ENG,
	mode: OFFLINE,
	toasterDelay: 2000,
	theme: LIGHT_MODE,
	version: '1.0.0',
};

config.domain = config.mode === ONLINE ? ONLINE_URL : config.mode === TEST ? TEST_URL : OFFLINE_URL;

const axiosConfig: AxiosConfigs = {
	defaultHeaders: () => ({
		Authorization: `Bearer ${sessionHelper.getAccessToken()}`,
		withCredentials: false,
		responseType: 'json',
	}),
	useMock: false,
};

export default axiosConfig;

// core
const CryptoJS = require('crypto-js');
const jwtDecode = require('jwt-decode');

// config
import * as appConfig from '@configs';

export const clearSession = () => {
	localStorage.removeItem('cipher');
};

export const decryptData = (data: any) => {
	const bytes = CryptoJS.AES.decrypt(data, appConfig.CLIENT_SECRET);
	const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

	return decryptedData;
};

export const encryptData = (data: any) => {
	const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(data), appConfig.CLIENT_SECRET).toString();

	return encryptedData;
};

export const getAccessToken = () => {
	if (getCipher() != null) {
		const cipher = decryptData(getCipher());
		const accessToken = cipher.access_token;

		return accessToken;
	}
};

export const getCipher = () => {
	return localStorage.getItem('cipher');
};

export const getDisplayName = () => {
	if (getCipher() != null) {
		const cipher = decryptData(getCipher());
		const displayName = cipher.displayName;

		return displayName;
	}
};

export const canActivate = (policy: Array<any>, route: any) => {
	return policy.find((a) => a.route === route).visibility;
};

export const getUserEmail = () => {
	if (getCipher() != null) {
		const cipher = decryptData(getCipher());
		const email = cipher.email;

		return email;
	}
};

export const getUserId = () => {
	if (getCipher() != null) {
		const cipher = decryptData(getCipher());
		const sid = cipher.sid;

		return sid;
	}
};

export const getAuthGuard = () => {
	let authGuard: boolean;
	let sessionValidity: boolean = false;

	if (getCipher() != null) {
		const cipher = decryptData(getCipher());
		authGuard = JSON.parse(cipher.login_success) === null ? false : true;
	}

	if (authGuard) {
		const accessToken = getAccessToken();
		const decodedToken = jwtDecode(accessToken);
		const expiryDate = new Date(decodedToken.exp * 1000);
		sessionValidity = expiryDate > new Date() ? true : false;
	}

	return sessionValidity;
};

export const getCredentials = () => {
	const decodedToken = jwtDecode(getAccessToken());
	const userName = decodedToken.displayName.substring(0, decodedToken.displayName.indexOf(','));
	const currentUser = userName;
	const credentials = {
		currentUser: currentUser,
	};

	return credentials;
};

export const initializeSession = (metaData: any) => {
	const decodedToken = jwtDecode(metaData.access_token);

	const displayName = decodedToken.mail.substring(0, decodedToken.mail.indexOf('.'));
	const metaObject = {
		access_token: metaData.access_token,
		displayName: displayName,
		email: decodedToken.mail,
		login_success: 'true',
		role: decodedToken?.roles === undefined ? 'guest' : decodedToken?.roles,
		sid: decodedToken.name,
	};

	const cipher = encryptData(metaObject);
	localStorage.setItem('cipher', cipher);
};

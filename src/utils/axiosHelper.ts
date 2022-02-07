// core
import axios from 'axios';

// misc
import * as sessionHelper from './sessionHelper';

export const client = () => {
	const defaultOptions = {
		headers: {
			Authorization: `Bearer ${sessionHelper.getAccessToken()}`,
		},
	};

	return {
		get: (url: string, options = {}) => axios.get(url, { ...defaultOptions, ...options }),
		post: (url: string, data: any, options = {}) => axios.post(url, data, { ...defaultOptions, ...options }),
		put: (url: string, data: any, options = {}) => axios.put(url, data, { ...defaultOptions, ...options }),
		delete: (url: string, options = {}) => axios.delete(url, { ...defaultOptions, ...options }),
	};
};

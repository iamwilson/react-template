// core
import { AxiosPromise } from 'axios';

// misc
import { configureStore } from './../store/configureStore';
import { beginApiCall, endApiCall } from './../actions/commonActions';

// response interceptor
export const responseInterceptor = (
	response: any,
	success: (data: any, statusCode?: number) => void,
	failed: (response: any, statusCode?: number) => void,
	history?: any
) => {
	if (response && response.status && [200, 201, 204].indexOf(response.status) !== -1) {
		if (response.data) {
			success(response.data, response.status);
		} else {
			success(response, response.status);
		}
	} else if (response && response.status && response.status === 401) {
		if (history) {
			history.push('/login');
		} else {
			failed(response, response.status);
		}
	} else {
		failed(response, response && response.status);
	}
};

// global loader
export const useLoader = <T>(promise: AxiosPromise<T>): AxiosPromise<T> => {
	configureStore().dispatch(beginApiCall());
	return promise.finally(() => {
		configureStore().dispatch(endApiCall());
	});
};

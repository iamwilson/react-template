// core
import axios, { AxiosPromise } from 'axios';

// misc
import { config } from '../../configs/config';
import { Credentials } from '../../models/credentials';

export const login = (credentials: Credentials, cancellor?: any): AxiosPromise<any> => {
	const url = config.auth + '/api/token/access-token';

	return axios.post(url, credentials, {
		cancelToken: new axios.CancelToken(function executor(c) {
			if (cancellor) {
				cancellor(c);
			}
		}),
	});
};

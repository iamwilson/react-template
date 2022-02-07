// config
import * as appSetting from '@configs';

// models
import { Credentials } from '@models/credentials';
import { HttpStatus } from '@models/enumTypes';

export const login = (credentials: Credentials): Promise<any> => {
	const data = {
		access_token:
			'eyJhbGciOiJSUzI1NiIsImtpZCI6IkY3OTI2MjMwM0NEQjFGNzI4ODgzMEUyM0Q3Mzg2NzBCNjc2OTc2NDEiLCJ0eXAiOiJKV1QiLCJ4NXQiOiI5NUppTUR6YkgzS0lndzRqMXpobkMyZHBka0UifQ.eyJuYmYiOjE2MDMxNzYwODIsImV4cCI6MTYwNDk5MDQ4MiwiaXNzIjoiaHR0cDovL2dhdGVrZWVwZXItYWRtaW4zLWxpZmUtbG50ZXJuYWwtcHJvZC5jdW11bHVzLnNlYmFuay5zZSIsImF1ZCI6WyJodHRwOi8vZ2F0ZWtlZXBlci1hZG1pbjMtbGlmZS1sbnRlcm5hbC1wcm9kLmN1bXVsdXMuc2ViYW5rLnNlL3Jlc291cmNlcyIsImlkYiJdLCJjbGllbnRfaWQiOiJpZGJDbGllbnQiLCJzdWIiOiJTMTQ3NUIiLCJhdXRoX3RpbWUiOjE2MDMxNzYwODIsImlkcCI6ImxvY2FsIiwibWFpbCI6ImpvaG4ud2FtdWlnYUBzZWIuc2UiLCJkZXBhcnRtZW50TnVtYmVyIjoiTDgxNDAwIiwiZGlzcGxheU5hbWUiOiJXYW11aWdhLCBKb2huIiwibmFtZSI6IlMxNDc1QiIsInNjb3BlIjpbImlkYiIsIm9mZmxpbmVfYWNjZXNzIl0sImFtciI6WyJwd2QiXX0.Jp7EazTk_EXwZp7npPUFl5U-ELAv30XisSrnUfXI6bnUB-uI5wnoJ3MBD65yndfVDEoaV2OEikp2Pl1-__1yd-V8A33Y46yml1bCdhkwlQ80ZkQYfegX9gY5eQHrxoutMyCcY-VrwZGUkvX5C4qZLsD5zNxGDBMAe7kn6XYSrw-czRRsFm_qBnKqaOFs8EXlcgnWBYwDKWc_j7qlOmjQ9lBgFEyv9l9OLs_oaIbE53w3e2lQYGtG3Zjk2kdpEvbx5B_ZiFOeZBqVTGDX3LfZjmAnA2wRdDUoBCfZEUMQeWt4AsQ1Z1S-YaL60i__FRbYJzQg3Y-RzjRY1yI6blvQr8xEt1wXxcSK0h49d2wz9GlmFfruGauOnllUPBivCaGVL8cARFs5rt_B5Am24YXMBphm6DpqazbG_SG00xxjOUqc6SYtD9kJYeRaK4MtI_Y9kqd2Vw6pAW7Qi-Jj6nPFayNXkNUFry1qU6H5U0RjtAvBHRbke_CrcKjK69kNc7h0Kq6MdxSb81WT-rxRrro--MXc1OEJfnAHGO5FK2eAiVP-QOZ5I_uSTAWcQauWCYrlHQ5lrbovnOfK8zmKkBBMeBUQ7y1N9HpaEX-xjCBSpqJG71vYO01Ve2B7fvBA-Encc6edwF2hroVrB7U2qb7jXuDKmkj22PHmYU2-w6oVrNw',
		expires_on: 1608435574,
		refresh_token: 'bd1a6dec9f5d424cddbfc6eb5b12b85a80c148d7ae052aeb35c5110d60962c32',
		scope: 'idb offline_access',
		token_type: 'Bearer',
	};

	return new Promise((resolve) => {
		resolveData(resolve, data, HttpStatus.Success, appSetting.config.apiDelay);
	});
};

export const resolveData = (resolve: any, data: any, status: number, timeOut?: number) => {
	return setTimeout(() => {
		resolve({ data: data, status: status });
	}, timeOut);
};

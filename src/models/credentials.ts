export class Credentials {
	password: string;
	username: string;

	constructor() {
		this.password = '';
		this.username = '';
	}
}

export class LoginInfo extends Credentials {
	clientId: string;
	clientSecret: string;
}

// misc
import { Credentials } from '@models/credentials';

export interface ILoginActions {
	getUser: () => Promise<void>;
	login: (credentials: Credentials) => Promise<void>;
	setGuard: (value: boolean) => void;
}

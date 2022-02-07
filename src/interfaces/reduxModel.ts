// core
import { AxiosRequestConfig } from 'axios';
import { RouteComponentProps } from 'react-router';

export interface IAppSharedProps extends RouteComponentProps {
	language: any;
	policy: any;

	triggerAlert: (title: string, msg: string) => void;
	triggerNotification: (msg: string, type?: any, persist?: boolean) => void;
	switchLanguage: (languageCode: string) => void;
	switchTheme: (theme: string) => void;
}

export interface AxiosConfigs {
	defaultHeaders?: () => AxiosRequestConfig;
	useMock: boolean;
}

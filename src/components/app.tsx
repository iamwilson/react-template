// core
import React from 'react';
import { connect } from 'react-redux';
import { Notification } from '@sebgroup/react-components/Notification';
import { Route, Routes, Navigate } from 'react-router-dom';

// components
import { PublicRoute } from './routing';
import Loader from './common/loader';
const Home = React.lazy(() => import('./home'));
const Login = React.lazy(() => import('./login/login'));
const NotFound = React.lazy(() => import('./common/notFound'));

// hooks
import { withRouter } from 'src/hooks/withRouter';

// misc
import * as appSetting from '@configs';
import * as routePath from '@constants/routePaths';
import * as sessionHelper from '@utils/sessionHelper';
import { AlertType } from '@models/alertTypes';
import { IAppSharedProps } from '@interfaces/reduxModel';
import { IState } from '@interfaces/state';
import english from '@lang/en-lang';
import swedish from '@lang/dk-lang';

interface IAppProps extends IAppSharedProps {
	isLoading: any;
}

interface IAppState {
	alertMessage: string;
	alertToggle: boolean;
	alertType: AlertType;
	alertPersist: boolean;
	langCode: string;
	language: Object;
	theme: string;
}

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			alertMessage: '',
			alertToggle: false,
			alertType: AlertType.Success,
			alertPersist: false,
			langCode: appSetting.config.language,
			language: {},
			theme: appSetting.config.theme,
		};

		this.triggerNotification = this.triggerNotification.bind(this);
	}

	componentDidMount() {
		this.initializeApp();
	}

	initializeApp() {
		this.loadAppLanguage();
		this.loadAppTheme();
	}

	loadAppLanguage() {
		const langCode = localStorage.getItem('langCode');
		langCode == null ? this.setLanguage(appSetting.config.language) : this.setLanguage(langCode);
		const language = langCode === appSetting.ENG ? english : swedish;
		this.setState({ langCode, language });
	}

	loadAppTheme() {
		const theme = localStorage.getItem('theme');
		theme == null ? this.setTheme(appSetting.config.theme) : this.setTheme(theme);
		this.setState({ theme });
	}

	setLanguage(langCode: string): void {
		const language = langCode === appSetting.ENG ? english : swedish;
		this.setState({ langCode, language });
		localStorage.setItem('langCode', langCode);
	}

	setTheme(theme: string): void {
		this.setState({ theme });
		localStorage.setItem('theme', theme);
	}

	switchLanguage = (e: any) => {
		const langCode = e.target.value;
		this.setLanguage(langCode);
	};

	switchTheme = (e: any) => {
		const theme = e.target.value;
		this.setTheme(theme);
	};

	triggerNotification(message: string, type: AlertType, persist: boolean = false) {
		this.setState({
			alertMessage: message,
			alertToggle: true,
			alertType: type,
			alertPersist: persist,
		});
	}

	render() {
		const sharedProps = {
			// displayName: sessionHelper.getDisplayName(),
			// email: sessionHelper.getUserEmail(),
			displayName: 'Rosscode',
			email: 'deejay@ross.com',
			langCode: this.state.langCode,
			language: this.state.language,
			theme: this.state.theme,

			switchLanguage: this.switchLanguage,
			switchTheme: this.switchTheme,
			triggerNotification: this.triggerNotification,
		};

		return (
			<>
				<div className='app-container'>
					<Loader showLoader={this.props.isLoading > 0} />
					<Notification
						dismissTimeout={2000}
						persist={this.state.alertPersist}
						theme={this.state.alertType}
						title='Notification'
						toggle={this.state.alertToggle}
						onDismiss={() => {
							this.setState({ alertToggle: false });
						}}>
						<div className='notification-header'>Notification</div>
						<div className='notification-body'>{this.state.alertMessage}</div>
					</Notification>

					<React.Suspense fallback={<Loader showLoader={true} />}>
						<Routes>
							<Route path={routePath.AppRoutes.Root}>
								<Navigate to={routePath.AppRoutes.Home}></Navigate>
							</Route>
							<PublicRoute path={routePath.AppRoutes.Login} component={Login} props={sharedProps} />
							<PublicRoute path={routePath.AppRoutes.Home} component={Home} props={sharedProps} />
							<PublicRoute path={routePath.AppRoutes.NotFound} component={NotFound} props={sharedProps} />
						</Routes>
					</React.Suspense>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state: IState) => {
	return {
		isLoading: state.loadingResponse,
	};
};

export default withRouter(connect(mapStateToProps)<any>(App));

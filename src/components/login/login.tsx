// core
import React from 'react';
import { bindActionCreators } from 'redux';
import { Button } from '@sebgroup/react-components/Button';
import { connect } from 'react-redux';
import { Textbox } from '@sebgroup/react-components/TextBox';
import { withRouter } from 'react-router-dom';

// constants
const fifthElement = require('@svgs/polygon.svg').default;

// misc
import * as appSetting from '@configs';

import * as loginActions from '@actions/loginActions';
import * as sessionHelper from '@utils/sessionHelper';
import * as validationHelper from '@utils/validationHelper';
import { AlertType } from '@models/alertTypes';
import { Credentials, LoginInfo } from '@models/credentials';
import { IAppSharedProps } from '@interfaces/reduxModel';
import { ILoginActions } from '@interfaces/actions';
import { IState } from '@interfaces/state';
import { responseInterceptor } from '@utils/interceptor';

interface ILoginProps extends IAppSharedProps {
	actions: ILoginActions;
	loginResponse: any;
	userResponse: any;
}

interface ILoginState {
	credentials: Credentials;
	errors: Credentials;
	usernameValid: boolean;
	passwordValid: boolean;
	formValid: boolean;
}

const appName = appSetting.APP_NAME;

class Login extends React.Component<ILoginProps, ILoginState> {
	constructor(props: ILoginProps) {
		super(props);

		this.state = {
			credentials: new Credentials(),
			errors: new Credentials(),
			usernameValid: false,
			passwordValid: false,
			formValid: false,
		};
	}

	handleChange = (e: any) => {
		const key = e.target.name;
		const value = e.target.value;

		const credentials: Credentials = { ...this.state.credentials };
		credentials[key] = value;
		this.setState({ credentials });
	};

	validateField = (e: any) => {
		const key = e.target.name;
		const value = e.target.value;
		const errors = this.state.errors;
		let usernameValid = this.state.usernameValid;
		let passwordValid = this.state.passwordValid;

		switch (key) {
			case 'username':
				usernameValid = validationHelper.isInputFilled(value) ? validationHelper.isInputNotNull(value) : true;
				errors.username = usernameValid ? '' : 'Please key in the username.';
				break;
			case 'password':
				passwordValid = validationHelper.isInputFilled(value) ? validationHelper.isInputNotNull(value) : true;
				errors.password = passwordValid ? '' : 'Please key in the password.';
				break;
			default:
				break;
		}

		this.setState({ errors, usernameValid, passwordValid });
	};

	validateForm = (handleLogin) => {
		const credentials: Credentials = { ...this.state.credentials };
		const errors = this.state.errors;
		let usernameValid = this.state.usernameValid;
		let passwordValid = this.state.passwordValid;

		Object.entries(credentials).forEach(([key, value]) => {
			switch (key) {
				case 'username':
					usernameValid = validationHelper.isInputNotNull(value);
					errors.username = usernameValid ? '' : 'Please key in the username.';
					break;
				case 'password':
					passwordValid = validationHelper.isInputNotNull(value);
					errors.password = passwordValid ? '' : 'Please key in the password.';
					break;
				default:
					break;
			}
		});

		this.setState({ formValid: usernameValid && passwordValid }, () => {
			if (this.state.formValid) {
				handleLogin();
			}
		});
	};

	handleLogin = () => {
		const loginInfo = new LoginInfo();
		loginInfo.clientId = appSetting.CLIENT_ID;
		loginInfo.clientSecret = appSetting.CLIENT_SECRET;
		loginInfo.password = this.state.credentials.password;
		loginInfo.username = this.state.credentials.username;

		this.props.actions.login(loginInfo).then(async () => {
			responseInterceptor(
				this.props.loginResponse,
				(data): void => {
					this.props.actions.setGuard(true);
					sessionHelper.initializeSession(data);
					this.props?.history.replace('/home');
				},
				(data): void => {
					const errorMessage = data.response.data;
					this.props.triggerNotification('Login Error : ' + errorMessage, AlertType.Danger, true);
				},
				this.props?.history
			);
		});
	};

	componentDidMount() {
		// if (sessionHelper.getAuthGuard()) {
		// 	this.props.actions.setGuard(true);
		// 	this.props.history.replace('/home');
		// }
	}

	render() {
		return (
			<>
				<div className='fifth-element-wrapper'>
					<img className='fifth-element-1' src={fifthElement} />
				</div>
				<div className='login-container bg-secondary-element'>
					<div className='login-masthead'>{appName}</div>
					<div className='login-wrapper'>
						<Textbox
							autoComplete='off'
							label='Username'
							name='username'
							value={this.state.credentials.username}
							onChange={this.handleChange}
							onBlur={this.validateField}
							type='text'
						/>
						<Textbox
							autoComplete='off'
							label='Password'
							name='password'
							value={this.state.credentials.password}
							onChange={this.handleChange}
							onBlur={this.validateField}
							onKeyDown={(e) => {
								if (e.keyCode === 13) {
									this.validateForm(this.handleLogin);
								}
							}}
							type='password'
						/>
						<Button className='btn-login' onClick={() => this.validateForm(this.handleLogin)} />
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state: IState) => {
	return {
		loginResponse: state.loginResponse,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(loginActions, dispatch),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)<any>(Login));

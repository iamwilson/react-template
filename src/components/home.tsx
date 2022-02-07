// core
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PrivateRoute, PublicRoute } from './routing';
import { Switch, withRouter } from 'react-router-dom';

// components
import Header from './common/header';
import NotFound from './common/notFound';
import SidePanel from './common/sidePanel';
import User from './common/user';

// misc
import * as loginActions from '@actions/loginActions';
import * as routePath from '@constants/routePaths';
import * as sessionHelper from '@utils/sessionHelper';
import { IAppSharedProps } from '@interfaces/reduxModel';
import { ILoginActions } from '@interfaces/actions';
import { IState } from '@interfaces/state';
import Default from './default/default';

interface IHomeProps extends IAppSharedProps {
	actions: ILoginActions;
	authGuardResponse: any;
}

interface IHomeState {
	toggleUserMenu: boolean;
	toggleSidePanel: boolean;
}

class Home extends React.Component<IHomeProps, IHomeState> {
	constructor(props: IHomeProps) {
		super(props);

		this.state = {
			toggleUserMenu: false,
			toggleSidePanel: false,
		};
	}

	componentDidMount() {}

	logoutUser = () => {
		sessionHelper.clearSession();
		this.props.actions.setGuard(false);
		this.props.history.replace('/');
	};

	openUserMenu = () => {
		this.setState({
			toggleUserMenu: this.state.toggleUserMenu === false ? true : false,
		});
	};

	openSidePanel = () => {
		this.setState({
			toggleSidePanel: this.state.toggleSidePanel === false ? true : false,
		});
	};

	render() {
		return (
			<>
				<div className='home-container'>
					<Header toggleSidePanel={this.openSidePanel} />
					<SidePanel {...this.props} {...this.state} />
					<User
						logoutUser={this.logoutUser}
						openUserMenu={this.openUserMenu}
						switchLanguage={this.props.switchLanguage}
						switchTheme={this.props.switchTheme}
						{...this.props}
						{...this.state}
					/>
					<div className={this.state.toggleSidePanel === false ? 'content-container' : 'content-container-full'}>
						<div className='content-wrapper'>
							<Switch>
								<PrivateRoute
									authenticated={true}
									exact={true}
									path={routePath.AppRoutes.Home}
									component={Default}
									props={this.props}
								/>
								<PublicRoute
									path={routePath.AppRoutes.NotFound}
									component={NotFound}
									props={{
										code: '',
										message: 'This feature is not available.',
									}}
								/>
							</Switch>
						</div>
					</div>
				</div>
			</>
		);
	}
}

const mapStateToProps = (state: IState) => {
	return {
		authGuardResponse: state.authGuardResponse,
	};
};

const mapDispatchToProps = (dispatch: any) => {
	return {
		actions: bindActionCreators(loginActions, dispatch),
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)<any>(Home));

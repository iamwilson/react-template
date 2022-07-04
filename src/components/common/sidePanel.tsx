// core
import React from 'react';
import { NavLink } from 'react-router-dom';

// misc
import * as appSetting from '@configs';
import * as routePath from '@constants/routePaths';

const SidePanel: React.FunctionComponent = (props: any) => {
	return (
		<>
			<div
				className={
					props.toggleSidePanel === false ? (props.theme === appSetting.DARK_MODE ? 'side-panel-dark' : 'side-panel-light') : 'side-panel-off'
				}>
				<div className={props.theme === appSetting.DARK_MODE ? 'app-menu-dark' : 'app-menu-light'}>
					<NavLink
						className={(navData) => (navData.isActive ? 'menu-item active' : 'menu-item')}
						to={routePath.HomeRoutes.Default.toString()}
						replace={true}>
						<i className='menu-icon fa fa-cloud' />
						{'Default'}
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default SidePanel;

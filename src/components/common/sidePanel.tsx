// core
import React from 'react';
import { NavLink } from 'react-router-dom';

// misc
import * as appSetting from '@configs';
import * as routePath from '@constants/routePaths';

const SidePanel: React.FC<any> = (props: any) => {
	return (
		<>
			<div
				className={
					props.toggleSidePanel === false
						? props.theme === appSetting.DARK_MODE
							? 'side-panel-dark'
							: 'side-panel-light'
						: 'side-panel-off'
				}
			>
				<div
					className={
						props.theme === appSetting.DARK_MODE
							? 'app-menu-dark'
							: 'app-menu-light'
					}
				>
					<NavLink
						className='menu-item'
						activeClassName='active'
						exact={true}
						to={routePath.HomeRoutes.Default.toString()}
						replace={true}
					>
						<i className='menu-icon fa fa-home' />
						{'Home'}
					</NavLink>
					<NavLink
						className='menu-item'
						activeClassName='active'
						exact={true}
						to={routePath.HomeRoutes.Profile.toString()}
						replace={true}
					>
						<i className='menu-icon fa fa-user' />
						{'Profile'}
					</NavLink>
					<NavLink
						className='menu-item'
						activeClassName='active'
						exact={true}
						to={routePath.HomeRoutes.Dashboard.toString()}
						replace={true}
					>
						<i className='menu-icon fa fa-tachometer ' />
						{'Dashboard'}
					</NavLink>
					<NavLink
						className='menu-item'
						activeClassName='active'
						exact={true}
						to={routePath.HomeRoutes.Report.toString()}
						replace={true}
					>
						<i className='menu-icon fa fa-file-text' />
						{'Reports'}
					</NavLink>
					<NavLink
						className='menu-item'
						activeClassName='active'
						exact={true}
						to={routePath.HomeRoutes.Settings.toString()}
						replace={true}
					>
						<i className='menu-icon fa fa-cogs' />
						{'Settings'}
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default SidePanel;

// core
import React from 'react';

// constants
const Logo = require('@images/logo.png').default;

// components
import Search from './search';

// misc
import * as appSetting from '@configs';

interface IHeaderProps {
	toggleSidePanel: () => void;
}

const Header = (props: IHeaderProps) => {
	return (
		<>
			<div className='header-container row'>
				<div className='btn btn-side-panel' onClick={(e) => props.toggleSidePanel()}>
					<i className='fa fa-bars' aria-hidden='true' />
				</div>
				<div className='app-name-container'>
					<div>
						<a className='home-anchor' href='#/home'>
							<img className='app-logo' src={Logo} />
						</a>
					</div>
					<div className='app-name'>{appSetting.APP_NAME}</div>
				</div>

				<Search />
			</div>
		</>
	);
};

export default Header;

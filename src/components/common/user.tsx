// core
import React from 'react';

// constants
const en = require('@images/en-icon.png').default;
const sw = require('@images/sw-icon.png').default;

// misc
import { IAppSharedProps } from '@interfaces/reduxModel';

interface IUserProps extends IAppSharedProps {
	logoutUser: (e: React.ChangeEvent) => void;
	openUserMenu: () => void;
}

const User: React.FC<IUserProps> = (props: any) => {
	return (
		<>
			<div className='user-container'>
				<div className='user-area'>
					<span className='fall-back-image' onClick={(e) => props.openUserMenu()}>
						<span className='fall-back-text text-capitalize'>{props?.displayName?.substring(0, 1)}</span>
					</span>
					<div className={props.toggleUserMenu === false ? 'user-dropdown' : 'user-dropdown u-open'}>
						<div className='user-details row'>
							<div className='col-md-4'>
								<span className='fall-back-image-lg' onClick={(e) => props.openUserMenu()}>
									<span className='fall-back-text-lg text-capitalize'>{props?.displayName?.substring(0, 1)}</span>
								</span>
								<span className='user-pulse'></span>
							</div>
							<div className='col-md-8 user-meta-data'>
								<div className='user-name text-capitalize'>{props?.displayName}</div>
								<div className='user-email'>{props.email}</div>
							</div>
							<span className='user-area-close-icon' onClick={(e) => props.openUserMenu()}>
								<i className='fa fa-times' aria-hidden='true' />
							</span>
						</div>
						{/* <div className='user-config'>
							Notifications<span className='badge badge-pill badge-dark ml-2'>5</span>
						</div> */}
						<div className='user-config'>
							<span>Language</span>
							<select
								name='language'
								id='language'
								className='lang-select ml-3'
								onChange={(e) => props.switchLanguage(e)}
								value={props?.langCode ? props.langCode : ''}>
								<option value='en'>English</option>
								<option value='sw'>Danish</option>
							</select>
							<span className='ml-2'>
								<img className='lang-flag' src={props.langCode === 'en' ? en : sw} />
							</span>
						</div>
						<div className='user-config'>
							<span>Theme</span>
							<select
								name='theme'
								id='theme'
								className='theme-select ml-4'
								onChange={(e) => props.switchTheme(e)}
								value={props?.theme ? props.theme : ''}>
								<option value='dark'>Dark</option>
								<option value='light'>Light</option>
							</select>
							<span className='theme-icon'>
								<i className={props.theme === 'dark' ? 'fa fa-moon-o' : 'fa fa-sun-o'} aria-hidden='true'></i>
							</span>
						</div>
						<div className='user-logout' onClick={(e) => props.logoutUser()}>
							Log Out
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default User;

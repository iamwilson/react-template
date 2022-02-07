// core
import React from 'react';

interface INotFoundProps {
	code?: string;
	message?: string;
}

const NotFound = (props: INotFoundProps) => {
	return (
		<>
			<div className='notfound-container container-fluid'>
				<div id='clouds'>
					<div className='cloud c1' />
					<div className='cloud c2' />
					<div className='cloud c3' />
					<div className='cloud c4' />
					<div className='cloud c5' />
					<div className='cloud c6' />
					<div className='not-found'>
						<span className='pull-left'>
							<b className={props.code ? '' : 'hide-not-found-code'}>{props.code}.</b>
							<span className='not-found-caption'>{props.message}</span>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default NotFound;

// core
import React from 'react';

interface ILoaderProps {
	showLoader: boolean;
}

const Loader = (props: ILoaderProps) => {
	return (
		props.showLoader && (
			<>
				<div className='loader-container'>
					<div className='loader' />
				</div>
			</>
		)
	);
};

export default Loader;

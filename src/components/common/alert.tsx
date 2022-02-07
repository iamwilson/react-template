// core
import React from 'react';

interface IAlertProps {
	message: string;
	title: string;
	toggle: boolean;

	closeAlert: () => void;
}

const Alert: React.FC<IAlertProps> = (props: any) => {
	return (
		<>
			<div className={props.toggle === true ? 'alert-on' : 'alert-off'}>
				<div className='alert alert-secondary alert-dismissible fade show' role='alert'>
					<strong>{props.title}</strong>
					<span>:</span>
					<span> {props.message}</span>
					<button
						type='button'
						className='close'
						data-dismiss='alert'
						aria-label='Close'
						onClick={(e) => props.closeAlert(e)}
					>
						<span aria-hidden='true'>&times;</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Alert;

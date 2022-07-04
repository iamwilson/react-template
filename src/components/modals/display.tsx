// core
import React from 'react';

// misc
import PortalWrapper from '@components/common/portalWrapper';

interface IRequestProps {
	modalTitle: string;
	modalContent: any;
	openModal: boolean;

	closeModal: () => void;
}

const Display: React.FC<IRequestProps> = (props: IRequestProps) => {
	return (
		<>
			<PortalWrapper rootID='modal-portal'>
				<div className={props.openModal ? 'modal -open' : 'modal'}>
					<div className='modal-content'>
						<div className='md-header'>
							<h1 className='md-title'>{props.modalTitle}</h1>
							<h1 className='md-close-icon' onClick={() => props.closeModal()}>
								<i className='fa fa-times-circle' aria-hidden='true' />
							</h1>
						</div>
						<div className='md-body'>
							<div className='col-md-12'>
								<div className='md-text-area'>
									<div>{props.modalContent}</div>
								</div>
							</div>
							<div className='md-button-row'>
								<span className='btn-margin row'>
									<button className='btn btn-sm btn-dark' onClick={() => props.closeModal()}>
										Cancel
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
			</PortalWrapper>
		</>
	);
};

export default Display;

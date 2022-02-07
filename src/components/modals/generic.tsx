// core
import React from 'react';

// misc
import PortalWrapper from '@components/common/portalWrapper';

interface ICloseProps {
	buttons?: any;
	modalTitle: string;
	modalContent: any;
	openModal: boolean;
	primaryActionTile?: string;

	primaryAction?: (e?: any) => void;
	closeModal: () => void;
}

const GenericModal: React.FC<ICloseProps> = (props: ICloseProps) => {
	return (
		<>
			<PortalWrapper rootID='modal-portal'>
				<div className={props.openModal ? 'modal -open' : 'modal'} onClick={() => props.closeModal()}>
					<div className='modal-content' onClick={(e) => e.stopPropagation()}>
						<div className='md-header'>
							<h1 className='md-title'>{props.modalTitle}</h1>
							<h1 className='md-close-icon' onClick={() => props.closeModal()}>
								{' '}
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
									{!props?.buttons && (
										<div>
											<button className='btn btn-sm btn-dark mr-3' onClick={() => props.closeModal()}>
												Cancel
											</button>
											<button className='btn btn-sm btn-primary' onClick={() => props.primaryAction()}>
												{props.primaryActionTile ?? 'Ok'}
											</button>
										</div>
									)}
									{props?.buttons}
								</span>
							</div>
						</div>
					</div>
				</div>
			</PortalWrapper>
		</>
	);
};

export default GenericModal;

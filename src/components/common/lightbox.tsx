// core
import React from 'react';

interface ILightBoxProps {
	overlay: boolean;
}

const LightBox = (props: ILightBoxProps) => {
	return (
		<>
			<div className={props.overlay === true ? 'light-box-on' : 'light-box-off'} />
		</>
	);
};

export default LightBox;

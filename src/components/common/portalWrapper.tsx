// core
import React from 'react';
import ReactDOM from 'react-dom';

export type PortalWrapperProps = React.PropsWithChildren<{
	rootID: string;
}>;

export const PortalWrapper: React.FC<PortalWrapperProps> = (props: PortalWrapperProps) => {
	const Root: React.MutableRefObject<HTMLDivElement> = React.useRef(document.getElementById(props.rootID) as any);
	const el: React.MutableRefObject<HTMLDivElement> = React.useRef(document.createElement('div'));

	React.useEffect(() => {
		Root.current ? Root.current.appendChild(el.current) : console.warn('rootId not found', props.rootID);

		return () => {
			Root.current ? Root.current.removeChild(el.current) : console.warn('rootId not found', props.rootID);
		};
	}, []);

	return ReactDOM.createPortal(props.children, el.current);
};

export default PortalWrapper;

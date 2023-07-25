// core
import React from 'react';
import { Route } from 'react-router-dom';

// misc
import NotFound from './common/notFound';

export const PublicRoute = ({
	component: Component,
	props: Props,
	...misc
}) => {
	return (
		<Route
			render={(props: any) => <Component {...props} {...Props} />}
			{...misc}
		/>
	);
};

export const PrivateRoute = ({
	authenticated,
	component: Component,
	props: Props,
	...misc
}) => {
	return (
		<Route
			render={(props: any) =>
				authenticated ? (
					<Component {...props} {...Props} />
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { returnUrl: Props.location.pathname },
						}}
					/>
				)
			}
			{...misc}
		/>
	);
};

export const ProtectedRoute = ({
	canActivate,
	component: Component,
	props: Props,
	...misc
}) => {
	return (
		<Route
			render={(props: any) =>
				canActivate ? (
					<Component {...props} {...Props} />
				) : (
					<NotFound
						{...props}
						{...{
							code: 'APM001',
							message: 'You are not authorized to view this route.',
						}}
					/>
				)
			}
			{...misc}
		/>
	);
};

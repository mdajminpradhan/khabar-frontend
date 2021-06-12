import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated, verifyToken } from './apicall';

const AdminRoute = ({ component: Component, ...rest }) => {

	return (
		<Route
			{...rest}
			render={(props) =>
				verifyToken() && isAuthenticated() && isAuthenticated().user.role === 1 ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/loginaccount',
							state: { from: props.location }
						}}
					/>
				)}
		/>
	);
};

export default AdminRoute;

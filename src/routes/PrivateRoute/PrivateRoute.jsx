import { Route, useHistory } from 'react-router';

import React from 'react';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
	const history = useHistory();
	const userPassword = useSelector((state) => state.userPassword);

	if (path === '/') {
		history.push('/dashboard/home');
	}
	if (!userPassword) {
		history.push('/login');
	}

	return <Route path={path} component={Component} {...rest} />;
};

export default PrivateRoute;

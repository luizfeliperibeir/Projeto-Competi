import { Route, Switch } from 'react-router';

import PrivateRoute from './PrivateRoute/PrivateRoute';
import React from 'react';

const Routes = () => {
	return (
		<Switch>
			<PrivateRoute />
			<Route />
		</Switch>
	);
};

export default Routes;

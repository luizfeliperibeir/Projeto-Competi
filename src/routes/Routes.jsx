import { Route, Switch } from 'react-router';

import Login from '../pages/Login/App';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import React from 'react';
import SwitchPages from './SwitchPages';

const Routes = () => {
	return (
		<Switch>
			<PrivateRoute path="/dashboard/:section" exact component={SwitchPages} />
			<PrivateRoute path="/dashboard/:section/:pokemon" exact component={SwitchPages} />
			<Route path="/login" exact component={Login} />
			<PrivateRoute path="/" />
		</Switch>
	);
};

export default Routes;

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from '../routes/Routes';

const Root = () => {
	return (
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	);
};

export default Root;

// import './Reset.css';

// import { Route, Switch } from 'react-router-dom';

// import Pokedex from './Pokedex';
// import Pokemon from './Pokemon';
// import React from 'react';

// const App = () => (
// 	<Switch>
// 		<Route exact path="/" render={(props) => <Pokedex {...props} />} />
// 		<Route exact path="/:pokemonId" render={(props) => <Pokemon {...props} />} />
// 	</Switch>
// );

// export default App;

import './Reset.css';

import { MuiThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux';
import React from 'react';
import Root from './pages/Root';
import { store } from './store/store';

const App = () => {
	return (
		<Provider store={store}>
			<MuiThemeProvider>
				<Root />
			</MuiThemeProvider>
		</Provider>
	);
};

export default App;

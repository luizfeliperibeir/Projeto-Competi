import App from './App';
import IdleTimer from 'react-idle-timer';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<React.StrictMode>
		<IdleTimer>
			<App />
		</IdleTimer>
	</React.StrictMode>,
	document.getElementById('root')
);

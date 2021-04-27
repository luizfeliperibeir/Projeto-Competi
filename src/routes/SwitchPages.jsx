import { Box, Typography } from '@material-ui/core';

import Pokedex from '../pages/Pokedex/Pokedex';
import React from 'react';
import { useParams } from 'react-router';

const SwitchPages = () => {
	const { section, pokemon } = useParams();

	let content = null;

	switch (section) {
		case 'pokedex':
			content = <Pokedex />;
			break;

		default:
			content = null;
			break;
	}

	return <Box>{content}</Box>;
};

export default SwitchPages;

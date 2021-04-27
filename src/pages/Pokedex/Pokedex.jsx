import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadFirstHundredPokemonAction } from '../../actions/actions';

const Pokedex = () => {
	const dispatch = useDispatch();
	const pokemonList = useSelector((state) => state.pokemonList);

	useEffect(() => {
		dispatch(loadFirstHundredPokemonAction());
	}, []);

	useEffect(() => {
		console.log(pokemonList);
	}, [pokemonList]);

	return (
		<Box>
			<Typography>Pokedex</Typography>
		</Box>
	);
};

export default Pokedex;

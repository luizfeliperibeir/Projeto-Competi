import { Box, Button, Grid, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { clearPokemonListAction, loadPokemonDataAction, loadPokemonList } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

import CustomCard from '../../components/CustomCard/CustomCard';

const Pokedex = () => {
	const dispatch = useDispatch();
	const pokemonList = useSelector((state) => state.pokemonList);
	const pokemonData = useSelector((state) => state.pokemonData);
	const [type, setType] = useState('water');
	const [pokemonNumbers, setPokemonNumbers] = useState({
		initial: 0,
		final: 6,
	});

	useEffect(() => {
		dispatch(loadPokemonList(type));
	}, [type]);

	useEffect(() => {
		if (pokemonList.pokemon && pokemonList.pokemon.length > 0) {
			pokemonList.pokemon
				.slice(pokemonNumbers.initial, pokemonNumbers.final)
				.map((pokemon, index) => dispatch(loadPokemonDataAction(pokemon.pokemon.name)));
		}
	}, [pokemonList, pokemonNumbers]);

	useEffect(() => {
		console.log(pokemonList.pokemon);
	}, [pokemonList]);

	useEffect(() => {
		console.log(pokemonData);
	}, [pokemonData]);

	const handleChangeType = async (e) => {
		await dispatch(clearPokemonListAction());
		setType(e.target.value);
	};

	return (
		<Box style={{ display: 'flex', flexDirection: 'column' }}>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={type}
				onChange={handleChangeType}
			>
				<MenuItem value={'fire'}>fire</MenuItem>
				<MenuItem value={'water'}>water</MenuItem>
			</Select>
			<Grid
				container
				spacing={2}
				style={{
					paddingTop: '20px',
					paddingLeft: '50px',
					paddingRight: '50px',
					backgroundColor: 'rgba(224, 215, 236, 1)',
				}}
			>
				{pokemonData.data.map((pokemon) => {
					return <CustomCard pokemon={pokemon} />;
				})}
				<Button
					onClick={() =>
						setPokemonNumbers({
							...pokemonNumbers,
							initial: pokemonNumbers.initial + 6,
							final: pokemonNumbers.final + 6,
						})
					}
				>
					proxima pagina
				</Button>
			</Grid>
		</Box>
	);
};

export default Pokedex;

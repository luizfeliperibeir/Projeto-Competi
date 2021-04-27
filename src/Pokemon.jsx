import { Button, CircularProgress, Link, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { toFirstCharUppercase } from './Constants';

const Pokemon = (props) => {
	const { match, history } = props;
	const { params } = match;
	const { pokemonId } = params;
	const [pokemon, setPokemon] = useState(undefined);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
			.then(function (response) {
				const { data } = response;
				setPokemon(data);
			})
			.catch(function (error) {
				setPokemon(false);
			});
	}, [pokemonId]);

	const generatePokemonJSX = (pokemon) => {
		const { name, id, species, height, weight, types, sprites } = pokemon;
		const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
		const { front_default } = sprites;
		return (
			<div style={{ backgroundColor: 'rgba(224, 215, 236, 1)' }}>
				<Typography variant="h1" style={{ backgroundColor: 'rgba(82, 65, 83, 1)', textAlign: 'center' }}>
					{`${id}.`} {toFirstCharUppercase(name)}
					<img src={front_default} />
				</Typography>
				<div style={{ textAlign: 'center' }}>
					<img style={{ width: '300px', height: '300px', textAlign: 'center' }} src={fullImageUrl} />
				</div>
				<Typography
					variant="h2"
					style={{ backgroundColor: 'rgba(224, 215, 236, 1)', textAlign: 'center' }}
				>
					Pokemon Info
				</Typography>
				<Typography
					variant="h4"
					style={{ backgroundColor: 'rgba(224, 215, 236, 1)', textAlign: 'center' }}
				>
					{'Species: '}
					<Link href={species.url}>{species.name} </Link>
				</Typography>
				<Typography
					variant="h5"
					style={{ backgroundColor: 'rgba(224, 215, 236, 1)', textAlign: 'center' }}
				>
					Height: {height}{' '}
				</Typography>
				<Typography
					variant="h5"
					style={{ backgroundColor: 'rgba(224, 215, 236, 1)', textAlign: 'center' }}
				>
					Weight: {weight}{' '}
				</Typography>
				<Typography
					variant="h6"
					style={{ backgroundColor: 'rgba(224, 215, 236, 1)', textAlign: 'center' }}
				>
					{' '}
					Types:
				</Typography>
				{types.map((typeInfo) => {
					const { type } = typeInfo;
					const { name } = type;
					return (
						<Typography key={name} variant="h6" style={{ textAlign: 'center' }}>
							{' '}
							{`${name}`}
						</Typography>
					);
				})}
			</div>
		);
	};

	return (
		<>
			{pokemon === undefined && <CircularProgress />}
			{pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
			{pokemon === false && (
				<Typography style={{ backgroundColor: 'rgba(224, 215, 236, 1)', textAlign: 'center' }}>
					{' '}
					Pokemon não encontrado
				</Typography>
			)}

			{pokemon !== undefined && (
				<div style={{ backgroundColor: 'rgba(224, 215, 236, 1)', textAlign: 'center' }}>
					<Button
						variant="contained"
						onClick={() => history.push('/')}
						style={{
							border: 0,
							padding: '10px',
							width: '200px',
							height: '50px',
							display: 'inline-block',
							margin: '10px',
							cursor: 'pointer',
							borderRadius: '4px',
						}}
					>
						Voltar ao Pokedex
					</Button>
				</div>
			)}
		</>
	);
};

export default Pokemon;

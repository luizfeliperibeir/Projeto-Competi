import axios from 'axios';

export const getPokemonList = (type) => {
	const url = `${process.env.REACT_APP_API_URL}/type/${type}`;

	return axios({
		method: 'get',
		url,
	});
};

export const getPokemonData = (index) => {
	const url = `${process.env.REACT_APP_API_URL}/pokemon-form/${index}`;

	return axios({
		method: 'get',
		url,
	});
};

import axios from 'axios';

export const getFirstHundredPokemon = () => {
	const url = `${process.env.REACT_APP_API_URL}/?limit=100`;

	return axios({
		method: 'get',
		url,
	});
};

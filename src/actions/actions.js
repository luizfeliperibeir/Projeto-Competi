import { LOAD_POKEMON_DATA, LOAD_POKEMON_LIST } from '../constants/actionsStrigns';
import { getPokemonData, getPokemonList } from '../services/services';

export const loadPokemonList = (type) => async (dispatch) => {
	try {
		const res = await getPokemonList(type);
		dispatch({
			type: LOAD_POKEMON_LIST,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const loadPokemonDataAction = (index) => async (dispatch) => {
	try {
		const res = await getPokemonData(index);
		dispatch({
			type: LOAD_POKEMON_DATA,
			payload: res.data,
		});
	} catch (err) {
		console.log(err);
	}
};

export const clearPokemonListAction = () => (dispatch) => {
	dispatch({
		type: 'CLEAR_TYPE',
		payload: {},
	});
};

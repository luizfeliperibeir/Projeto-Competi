import { LOAD_FIRST_HUNDRED_POKEMON } from '../constants/actionsStrigns';
import { getFirstHundredPokemon } from '../services/services';

export const loadFirstHundredPokemonAction = () => async (dispatch) => {
	try {
		const res = await getFirstHundredPokemon();
		dispatch({
			type: LOAD_FIRST_HUNDRED_POKEMON,
			payload: res,
		});
	} catch (err) {
		console.log(err);
	}
};

import { LOAD_POKEMON_DATA, LOAD_POKEMON_LIST } from '../constants/actionsStrigns';
import { applyMiddleware, compose, createStore } from 'redux';

import thunk from 'redux-thunk';

const INITIAL_STATE = {
	pokemonList: {
		results: [],
	},
	pokemonData: {
		data: [],
	},
	userPassword: '',
};

//

const enhancer = compose(applyMiddleware(thunk));

const state = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOAD_POKEMON_LIST:
			return { ...state, pokemonList: action.payload };

		case 'CLEAR_TYPE':
			return {
				...state,
				pokemonList: {},
				pokemonData: {
					...state.pokemonData,
					data: [
						{
							name: '',
							names: [],
							sprites: {
								front_default: '',
							},
						},
					],
				},
			};

		case LOAD_POKEMON_DATA:
			return {
				...state,
				pokemonData: {
					...state.pokemonData,
					data: [...state.pokemonData.data, action.payload],
				},
			};

		case 'SET_USER_PASSWORD':
			return {
				...state,
				userPassword: action.payload,
			};

		default:
			return { ...state };
	}
};

const store = createStore(state, enhancer);

export { store };

/* 
		
	{...obj, obj: 'vizeu'}

*/

import { applyMiddleware, compose, createStore } from 'redux';

import { LOAD_FIRST_HUNDRED_POKEMON } from '../constants/actionsStrigns';
import thunk from 'redux-thunk';

const INITIAL_STATE = {
	pokemonList: {},
};

// async redux

const enhancer = compose(applyMiddleware(thunk));

const state = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOAD_FIRST_HUNDRED_POKEMON:
			return { ...state, pokemonList: action.payload };

		default:
			return { ...state };
	}
};

const store = createStore(state, enhancer);

export { store };

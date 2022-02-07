// core
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// misc
import { rootReducer } from '@reducers/rootReducer';

export const configureStore = () => {
	const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

	return store;
};

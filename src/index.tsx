// core
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';

// components
import App from './components/app';

// misc
import './favicon.ico';
import './styles/main.scss';

// store
import { configureStore } from './store/configureStore';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('app')
);

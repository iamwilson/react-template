// core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// components
import App from './components/app';

// misc
import './favicon.ico';
import './styles/main.scss';

// store
import { configureStore } from './store/configureStore';

const store = configureStore();
const container = document.getElementById('app');
const root = createRoot(container);

root.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
);

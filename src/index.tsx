// core
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './components/app';

// misc
import './favicon.ico';
import './styles/main.scss';

// store
import { configureStore } from './store/configureStore';

const store = configureStore();
const container = document.getElementById('app');

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>
	</React.StrictMode>
);

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './app.tsx';
import { store } from './store/index.ts';

import './index.css';

const container = document.getElementById('root');

createRoot(container!).render(
	<Provider store={store}>
		<App />
	</Provider>
);

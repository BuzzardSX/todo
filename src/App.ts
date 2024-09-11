import { createElement } from 'react';
import { Provider } from 'react-redux';
import { Board } from './features/todo';
import store from './store';

const App = () => createElement(
	Provider,
	{
		children: createElement(
			'div',
			null,
			createElement(Board)
		),
		store
	}
);

export default App;

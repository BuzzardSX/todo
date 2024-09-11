import { Provider } from 'react-redux';
import store from './store';
// import { List } from '../features/todo';

export default function App() {
	return (
		<Provider store={store}>
			App content
		</Provider>
	);
}

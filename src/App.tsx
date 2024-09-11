import { Provider } from 'react-redux';
import store from './store';
import { TodoItem } from './features/todo/ui';

export default function App() {
	return (
		<Provider store={store}>
			<TodoItem />
		</Provider>
	);
}

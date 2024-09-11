import { Provider } from 'react-redux';
import store from './store';
import { TodoList } from './features/todo/ui';

const App = () => (
	<Provider store={store}>
		<TodoList />
	</Provider>
);

export default App;

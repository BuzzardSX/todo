import { Provider } from 'react-redux';
import store from './store';
import { TodoItem } from './features/todo/ui';

const App = () => (
	<Provider store={store}>
		<TodoItem />
	</Provider>
);

export default App;

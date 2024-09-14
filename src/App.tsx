import { Provider } from 'react-redux';
import { Board } from './features/todo';
import store from './store';

const App = () => (
	<Provider store={store}>
		<Board />
	</Provider>
);

export default App;

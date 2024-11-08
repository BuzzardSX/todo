import { Provider } from 'react-redux';
import { UserForm } from '~/forms';
import { Board } from '~/features/todo';
import store from './store';

const App = () => (
	<Provider store={store}>
		<div>
			<UserForm />
		</div>
		<Board />
	</Provider>
);

export default App;

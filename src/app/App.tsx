import { Provider } from 'react-redux';
import store from './store';
import { DefaultPage } from '~/pages';

const App = () => (
	<Provider store={store}>
		<DefaultPage />
	</Provider>
);

export default App;

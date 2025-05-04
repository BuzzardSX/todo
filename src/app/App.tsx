import { Provider } from 'react-redux';
import { AboutPage } from '~/pages';
import store from './store';

const App = () => (
	<Provider store={store}>
		<AboutPage />
	</Provider>
);

export default App;

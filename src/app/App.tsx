import { Provider } from 'react-redux';
import store from './store';
import { AboutPage } from '~/pages';

const App = () => (
	<Provider store={store}>
		<AboutPage />
	</Provider>
);

export default App;

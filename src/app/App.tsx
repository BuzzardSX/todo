import { Provider } from 'react-redux';
import store from './store';
import { Theme } from '~/libs/react/components';
import { AboutPage } from '~/pages';

const App = () => (
	<Provider store={store}>
		<Theme>
			<AboutPage />
		</Theme>
	</Provider>
);

export default App;

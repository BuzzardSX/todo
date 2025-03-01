import { Provider } from 'react-redux';
import store from './store';
import { Theme } from '~/libs/react/components';
import { AboutPage } from '~/pages';

const App = () => (
	<Provider store={store}>
		<Theme style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
			<AboutPage />
		</Theme>
	</Provider>
);

export default App;

import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd-mobile';
import { HomePage } from '~/pages';

const App = () => (
	<Provider store={store}>
		<ConfigProvider>
			<HomePage />
		</ConfigProvider>
	</Provider>
);

export default App;

import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider } from 'antd-mobile';
import { DefaultPage } from '~/pages';

const App = () => (
	<Provider store={store}>
		<ConfigProvider>
			<DefaultPage />
		</ConfigProvider>
	</Provider>
);

export default App;

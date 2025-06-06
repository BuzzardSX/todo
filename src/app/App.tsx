import { Provider } from 'react-redux';
import store from './store';

const App = () => (
	<Provider store={store}>{null}</Provider>
);

export default App;

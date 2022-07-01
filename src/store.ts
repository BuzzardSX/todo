import { configureStore } from '@reduxjs/toolkit';
import features from '../features';

const store = configureStore({
	reducer: {
		...features
	}
});

export type Dispatch = typeof store.dispatch;

export default store;

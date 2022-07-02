import { configureStore } from '@reduxjs/toolkit';
import features from '../features';

const store = configureStore({
	reducer: {
		...features
	}
});

export type Dispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;

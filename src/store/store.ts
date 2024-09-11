import { configureStore } from '@reduxjs/toolkit';
import * as todo from '../features/todo';

const store = configureStore({
	reducer: {
		[todo.reducerPath]: todo.reducer
	}
});

export default store;

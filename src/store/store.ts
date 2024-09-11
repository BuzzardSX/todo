import { configureStore } from '@reduxjs/toolkit';
import * as todo from '../features/todo';
import todoSlice from '../features/todo/todoSlice';

const store = configureStore({
	reducer: {
		[todoSlice.reducerPath]: todo.reducer
	}
});

export default store;

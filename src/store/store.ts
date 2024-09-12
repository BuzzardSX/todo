import { configureStore } from '@reduxjs/toolkit';
import todoBoardSlice from '../features/todo/board/todoBoardSlice';

const store = configureStore({
	reducer: {
		[todoBoardSlice.reducerPath]: todoBoardSlice.reducer
	}
});

export default store;

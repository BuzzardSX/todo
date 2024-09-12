import { configureStore } from '@reduxjs/toolkit';
import todoBoardSlice from '../features/todo/board/slice';

const store = configureStore({
	reducer: {
		[todoBoardSlice.reducerPath]: todoBoardSlice.reducer
	}
});

export default store;

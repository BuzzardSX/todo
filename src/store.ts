import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import todoBoardSlice from './features/todo/board/slice';

const store = configureStore({
	reducer: {
		[todoBoardSlice.reducerPath]: todoBoardSlice.reducer
	}
});

type RootState = ReturnType<typeof store.getState>

export const useAppSelector = useSelector.withTypes<RootState>();

export default store;

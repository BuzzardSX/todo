import { configureStore } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import todoBoardSlice from '~/features/todo/board/slice';
import homeSlice from '~/features/home/slice';

const store = configureStore({
	reducer: {
		[homeSlice.reducerPath]: homeSlice.reducer,
		[todoBoardSlice.reducerPath]: todoBoardSlice.reducer
	}
});

type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppDispatcher = useDispatch.withTypes<AppDispatch>();

export default store;

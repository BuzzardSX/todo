import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userModalVisible: true
};

export const {
	reducerPath,
	reducer,
	actions,
	selectors
} = createSlice({
	name: 'home',
	initialState,
	reducers: {
		userModalShow: (state) => {
			state.userModalVisible = true;
		}
	},
	selectors: {
		selectUserModalVisible: (state) => state.userModalVisible
	}
});

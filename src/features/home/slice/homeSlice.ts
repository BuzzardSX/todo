import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userModalVisible: false
};

export const {
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

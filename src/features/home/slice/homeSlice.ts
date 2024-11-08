import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userModalVisible: false
};

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		userModalShow: (state) => {
			state.userModalVisible = true;
		},
		userModalHide: (state) => {
			state.userModalVisible = false;
		}
	},
	selectors: {
		selectUserModalVisible: (state) => state.userModalVisible
	}
});

export default homeSlice;

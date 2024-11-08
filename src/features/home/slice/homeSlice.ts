import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userModalVisible: true
};

const homeSlice = createSlice({
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

export default homeSlice;

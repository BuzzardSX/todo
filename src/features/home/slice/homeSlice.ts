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
		}
	}
});

export const { actions } = homeSlice;

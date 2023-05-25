import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	order: "asc",
	sortby: "price",
};

const sortSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		changeSortType(state, action) {
			state.order = action.payload.order;
			state.sortby = action.payload.sortby;
		},
	},
});

export const { changeSortType } = sortSlice.actions;
export default sortSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	order: "asc",
	sortby: "price",
	category: "All Plants",
};

const sortSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		changeSortType(state, action) {
			state.order = action.payload.order;
			state.sortby = action.payload.sortby;
		},
		changeCategory(state, action) {
			state.category = action.payload;
		},
	},
});

export const { changeSortType, changeCategory } = sortSlice.actions;
export default sortSlice.reducer;

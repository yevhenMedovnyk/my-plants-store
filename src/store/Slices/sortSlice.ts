import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISortSliceState {
	order: "desc" | "asc";
	sortby: string;
	category: string;
}

const initialState = {
	order: "desc",
	sortby: "price",
	category: "All Plants",
};

const sortSlice = createSlice({
	name: "sort",
	initialState,
	reducers: {
		changeSortType(state, action) {
			state.order = action.payload.order as "desc" | "asc";
			state.sortby = action.payload.sortby as string;
		},
		changeCategory(state, action) {
			state.category = action.payload as string;
		},
	},
});

export const { changeSortType, changeCategory } = sortSlice.actions;
export default sortSlice.reducer;

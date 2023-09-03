import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
	searchInputValue: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearchInputValue(state, action: PayloadAction<string>) {
			state.searchInputValue = action.payload;
		},
	},
});

export const { setSearchInputValue } = searchSlice.actions;
export default searchSlice.reducer;

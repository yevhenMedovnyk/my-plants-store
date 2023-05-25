import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlants = createAsyncThunk(
	"main/fetchPlants",
	async (url, { rejectWithValue }) => {
		try {
			const res = await axios.get(url);
			return res.data;
		} catch (error) {
			console.log(error.message);
			return rejectWithValue(error.message);
		}
	},
);

const initialState = {
	shopItems: [],
	currentPage: 1,
	status: null,
	error: null,
};

export const mainSlice = createSlice({
	name: "plants",
	initialState,
	reducers: {
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
	},
	extraReducers: {
		[fetchPlants.pending]: state => {
			state.status = "loading";
			state.error = null;
		},
		[fetchPlants.fulfilled]: (state, action) => {
			state.status = "resolved";
			state.shopItems = action.payload;
		},
		[fetchPlants.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
	},
});

export const { setCurrentPage } = mainSlice.actions;
export default mainSlice.reducer;

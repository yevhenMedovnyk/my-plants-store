import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlants = createAsyncThunk(
	"main/fetchPlants",
	async (url, { rejectWithValue, dispatch }) => {
		try {
			const res = await axios.get(url);
			dispatch(setTotalCount(res.headers.get("X-Total-Count")));
			return res.data;
		} catch (error) {
			console.log(error.message);
			return rejectWithValue(error.message);
		}
	},
);

const initialState = {
	shopItems: [],
	currentPage: 0,
	totalCount: 0,
	pageLimit: 16,
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
		setTotalCount(state, action) {
			state.totalCount = action.payload;
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

export const { setCurrentPage, setTotalCount } = mainSlice.actions;
export default mainSlice.reducer;

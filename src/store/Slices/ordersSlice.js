import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk(
	"orders/fetchOrders",
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
	orders: [],
	currentPage: 0,
	totalCount: 0,
	status: null,
	error: null,
};

export const ordersSlice = createSlice({
	name: "orders",
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
		[fetchOrders.pending]: state => {
			state.status = "loading";
			state.error = null;
		},
		[fetchOrders.fulfilled]: (state, action) => {
			state.status = "resolved";
			state.orders = action.payload;
		},
		[fetchOrders.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
	},
});

export const { setCurrentPage, setTotalCount } = ordersSlice.actions;
export default ordersSlice.reducer;

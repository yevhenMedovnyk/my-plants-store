import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrder } from "../../types/IOrder";

interface IOrderState {
	orders: IOrder[];
	currentPage: number;
	totalCount: number;
	status?: null | string;
	error?: null | string;
}

export const fetchOrders = createAsyncThunk<IOrder[], string, { rejectValue: string }>(
	"orders/fetchOrders",
	async (url, { rejectWithValue, dispatch }) => {
		try {
			const res = (await axios.get(url)) as any;
			dispatch(setTotalCount(res.headers.get("X-Total-Count")));
			return res.data;
		} catch (error: any) {
			console.log(error.message);
			return rejectWithValue(error.message);
		}
	},
);

const initialState: IOrderState = {
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

	extraReducers: builder => {
		builder.addCase(fetchOrders.pending, state => {
			state.status = "loading";
			state.error = null;
		});
		builder.addCase(fetchOrders.fulfilled, (state, action) => {
			state.status = "resolved";
			state.orders = action.payload;
		});
		builder.addCase(fetchOrders.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		});
	},
});

export const { setCurrentPage, setTotalCount } = ordersSlice.actions;
export default ordersSlice.reducer;

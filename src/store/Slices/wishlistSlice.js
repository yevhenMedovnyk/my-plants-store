import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWishlist = createAsyncThunk(
	"wishlist/fetchWishlist",
	async (url, { rejectWithValue, dispatch }) => {
		try {
			const res = await axios.get(url);
			dispatch(setTotalCount(res.headers.get("X-Total-Count")));
			console.log(res.headers.get("X-Total-Count"));
			return res.data;
		} catch (error) {
			console.log(error.message);
			return rejectWithValue(error.message);
		}
	},
);

const initialState = {
	wishlist: [],
	currentPage: 0,
	totalCount: 0,
	status: null,
	error: null,
};

export const wishlistSlice = createSlice({
	name: "wishList",
	initialState,
	reducers: {
		addItemToWishlist(state, action) {
			if (state.wishlist.some(item => item.id == action.payload.id)) {
				return;
			} else {
				state.wishlist.push(action.payload);
			}
		},
		removeFromWishlist(state, action) {
			state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload;
		},
	},
	extraReducers: {
		[fetchWishlist.pending]: state => {
			state.status = "loading";
			state.error = null;
		},
		[fetchWishlist.fulfilled]: (state, action) => {
			state.status = "resolved";
			state.wishlist = action.payload;
		},
		[fetchWishlist.rejected]: (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		},
	},
});

export const { setCurrentPage, setTotalCount, addItemToWishlist, removeFromWishlist } =
	wishlistSlice.actions;
export default wishlistSlice.reducer;

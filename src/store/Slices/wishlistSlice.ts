import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPlant } from "../../types/IPlant";

interface IWishlistState {
	wishlist: IPlant[];
	currentPage: number;
	totalCount: number;
	pageLimit: number;
	status?: null | string;
	error?: null | string;
}

export const fetchWishlist = createAsyncThunk<
	IPlant[],
	string,
	{ rejectValue: string; dispatch: any }
>("wishlist/fetchWishlist", async (url, { rejectWithValue, dispatch }) => {
	try {
		const res = (await axios.get(url)) as any;
		dispatch(setTotalCount(res.headers.get("X-Total-Count")));
		return res.data;
	} catch (error: any) {
		console.log(error.message);
		return rejectWithValue(error.message);
	}
});

const initialState: IWishlistState = {
	wishlist: [],
	currentPage: 0,
	totalCount: 0,
	pageLimit: 6,
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

	extraReducers: builder => {
		builder.addCase(fetchWishlist.pending, state => {
			state.status = "loading";
			state.error = null;
		});
		builder.addCase(fetchWishlist.fulfilled, (state, action) => {
			state.status = "resolved";
			state.wishlist = action.payload;
		});
		builder.addCase(fetchWishlist.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		});
	},
});

export const { setCurrentPage, setTotalCount, addItemToWishlist, removeFromWishlist } =
	wishlistSlice.actions;
export default wishlistSlice.reducer;

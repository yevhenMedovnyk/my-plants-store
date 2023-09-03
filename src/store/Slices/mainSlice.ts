import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IShopItem } from "../../types/IShopItem";

interface IMainSliceState {
	shopItems: IShopItem[];
	currentPage: number;
	totalCount: number;
	pageLimit: number;
	status?: null | string;
	error?: null | string;
}

export const fetchPlants = createAsyncThunk<IShopItem[], string, { rejectValue: string }>(
	"main/fetchPlants",
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

const initialState: IMainSliceState = {
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
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload;
		},
	},

	extraReducers: builder => {
		builder.addCase(fetchPlants.pending, state => {
			state.status = "loading";
			state.error = null;
		});
		builder.addCase(fetchPlants.fulfilled, (state, action) => {
			state.status = "resolved";
			state.shopItems = action.payload;
		});
		builder.addCase(fetchPlants.rejected, (state, action) => {
			state.status = "rejected";
			state.error = action.payload;
		});
	},
});

export const { setCurrentPage, setTotalCount } = mainSlice.actions;
export default mainSlice.reducer;

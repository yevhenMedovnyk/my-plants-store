import { configureStore } from "@reduxjs/toolkit";

import plants from "./Slices/mainSlice";
import cart from "./Slices/cartSlice";
import sort from "./Slices/sortSlice";
import auth from "./Slices/authSlice";
import wishlist from "./Slices/wishlistSlice";
import orders from "./Slices/ordersSlice";
import search from "./Slices/searchSlice";


export const store = configureStore({
	reducer: {
		plants,
		cart,
		sort,
		auth,
		wishlist,
		orders,
		search
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

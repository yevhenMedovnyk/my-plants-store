import { configureStore } from "@reduxjs/toolkit";

import plants from "./Slices/mainSlice";
import cart from "./Slices/cartSlice";
import sort from "./Slices/sortSlice";

export const store = configureStore({
	reducer: {
		plants,
		cart,
		sort,
	},
});
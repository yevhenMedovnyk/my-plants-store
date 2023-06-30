import { configureStore } from "@reduxjs/toolkit";

import plants from "./Slices/mainSlice";
import cart from "./Slices/cartSlice";
import sort from "./Slices/sortSlice";
import auth from "./Slices/authSlice";
<<<<<<< Updated upstream
=======
import wishlist from "./Slices/wishlistSlice";
import orders from "./Slices/ordersSlice";
>>>>>>> Stashed changes

export const store = configureStore({
	reducer: {
		plants,
		cart,
		sort,
		auth,
	},
});



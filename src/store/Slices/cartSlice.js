import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItemToCart(state, action) {
			if (state.cart.some(item => item.id == action.payload.id)) {
				return;
			} else {
				state.cart.push(action.payload);
			}
		},
	},
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;

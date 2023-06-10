import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	subTotalSum: 0,
	totalSum: 0,
	coupon: "",
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
		incrementCounter(state, action) {
			const inCart = state.cart.find(item => item.id === action.payload);
			if (inCart) {
				inCart.count += 1;
			}
		},
		decrementCounter(state, action) {
			const inCart = state.cart.find(item => item.id === action.payload);
			if (inCart) {
				inCart.count -= 1;
				if (inCart.count <= 0) {
					state.cart = state.cart.filter(item => item.id !== action.payload);
				}
			}
		},
		removeFromCart(state, action) {
			state.cart = state.cart.filter(item => item.id !== action.payload);
		},
		setSubTotalSum(state) {
			state.subTotalSum = state.cart.reduce((sum, item) => sum + item.price * item.count, 0);
		},
		setTotalSum(state, action) {
			state.totalSum = action.payload;
		},
		setCoupon(state, action) {
			state.coupon = action.payload;
		},
	},
});

export const {
	addItemToCart,
	incrementCounter,
	decrementCounter,
	removeFromCart,
	setSubTotalSum,
	setTotalSum,
	setCoupon
} = cartSlice.actions;

export default cartSlice.reducer;

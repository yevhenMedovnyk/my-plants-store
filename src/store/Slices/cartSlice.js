import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	subTotalSum: 0,
	totalSum: 0,
	inputCoupon: "",
	couponData: [],
	inputValues: {
		firstName: "",
		lastName: "",
		country: "",
		city: "",
		street: "",
		apartment: "",
		state: "",
		zip: "",
		email: "",
		phone: "",
		notes: "",
	},
	paymentMethod: "cash",
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
		setInputCoupon(state, action) {
			state.inputCoupon = action.payload;
		},
		setCouponData(state, action) {
			state.couponData = action.payload;
		},
		setInputValues(state, action) {
			const value = action.payload;
			state.inputValues = { ...state.inputValues, ...value };
		},
		setPaymentMethod(state, action) {
			state.paymentMethod = action.payload;
		},
		clearCart(state) {
			state.cart = [];
		},
		clearInputValues(state) {
			state.inputValues = {
				firstName: "",
				lastName: "",
				country: "",
				city: "",
				street: "",
				apartment: "",
				state: "",
				zip: "",
				email: "",
				phone: "",
				notes: "",
			};
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
	setInputCoupon,
	setCouponData,
	setInputValues,
	setPaymentMethod,
	clearCart,
	clearInputValues
} = cartSlice.actions;

export default cartSlice.reducer;

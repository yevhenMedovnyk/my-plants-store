import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPlant } from "../../types/IPlant";
import { ICouponData } from "../../types/ICouponData";
import { IAdressData } from "../../types/IAdressData";

const initialState = {
	cart: <IPlant[]>[],
	subTotalSum: 0,
	totalSum: 0,
	inputCoupon: "",
	couponData: <ICouponData[]>[],
	inputValues: <IAdressData> {
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
		addItemToCart(state, action: PayloadAction<IPlant>) {
			if (state.cart.some(item => item.id == action.payload.id)) {
				return;
			} else {
				state.cart.push(action.payload);
			}
		},
		incrementCounter(state, action: PayloadAction<string>) {
			const inCart = state.cart.find(item => item.id === action.payload);
			if (inCart) {
				inCart.count += 1;
			}
		},
		decrementCounter(state, action: PayloadAction<string>) {
			const inCart = state.cart.find(item => item.id === action.payload);
			if (inCart) {
				inCart.count -= 1;
				if (inCart.count <= 0) {
					state.cart = state.cart.filter(item => item.id !== action.payload);
				}
			}
		},
		removeFromCart(state, action: PayloadAction<string>) {
			state.cart = state.cart.filter(item => item.id !== action.payload);
		},
		setSubTotalSum(state) {
			state.subTotalSum = state.cart.reduce((sum, item) => sum + item.price * item.count, 0);
		},
		setTotalSum(state, action: PayloadAction<number>) {
			state.totalSum = action.payload;
		},
		setInputCoupon(state, action: PayloadAction<string>) {
			state.inputCoupon = action.payload;
		},
		setCouponData(state, action: PayloadAction<ICouponData[]>) {
			state.couponData = action.payload;
		},
		setInputValues(state, action) {
			const value = action.payload;
			state.inputValues = { ...state.inputValues, ...value };
		},
		setPaymentMethod(state, action: PayloadAction<string>) {
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
	clearInputValues,
} = cartSlice.actions;

export default cartSlice.reducer;

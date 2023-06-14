import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loginInputValues: {
		email: "",
		password: "",
	},
	registerInputValues: {
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	},
	isLoginRegisterOpened: false,
	user: {
		displayName: null,
		email: null,
		photoURL: null,
		uid: null,
		accessToken: null
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLoginInputValues(state, action) {
			const payloadValue = action.payload;
			state.loginInputValues = { ...state.loginInputValues, ...payloadValue };
		},
		setRegisterInputValues(state, action) {
			const payloadValue = action.payload;
			state.registerInputValues = { ...state.registerInputValues, ...payloadValue };
		},
		setIsLoginRegisterOpened(state, action) {
			state.isLoginRegisterOpened = action.payload;
		},
		setUserData(state, action) {
			state.user = action.payload;
		},
	},
});

export const {
	setLoginInputValues,
	setRegisterInputValues,
	setIsLoginRegisterOpened,
	setUserData,
} = authSlice.actions;
export default authSlice.reducer;

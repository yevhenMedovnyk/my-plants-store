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
	},
});

export const { setLoginInputValues, setRegisterInputValues } = authSlice.actions;
export default authSlice.reducer;

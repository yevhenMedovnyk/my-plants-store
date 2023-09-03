import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/IUser";
import { IAuth } from "../../types/IAuth";
import { IRegister } from "../../types/IRegister";

interface IAuthInitialState {
	loginInputValues: IAuth;
	registerInputValues: IRegister;
	isLoginRegisterOpened: boolean;
	user: IUser;
}

const initialState: IAuthInitialState = {
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
		displayName: "",
		email: "",
		photoURL: "",
		uid: "",
	},
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLoginInputValues(state, action: PayloadAction<IAuth>) {
			const payloadValue = action.payload;
			console.log(payloadValue);

			state.loginInputValues = { ...state.loginInputValues, ...payloadValue };
		},
		setRegisterInputValues(state, action: PayloadAction<IRegister>) {
			const payloadValue = action.payload;
			state.registerInputValues = { ...state.registerInputValues, ...payloadValue };
		},
		setIsLoginRegisterOpened(state, action: PayloadAction<boolean>) {
			state.isLoginRegisterOpened = action.payload;
		},
		setUserData(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
	},
});

export const {
	setLoginInputValues,
	setRegisterInputValues,
	setIsLoginRegisterOpened,
	setUserData
} = authSlice.actions;
export default authSlice.reducer;

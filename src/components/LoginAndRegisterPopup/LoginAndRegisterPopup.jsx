import { useEffect, useState } from "react";
import style from "./loginAndRegisterPopup.module.scss";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Button from "../UI/Button/Button";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../firebase";

import close from "./../../assets/images/close.png";
import google from "./../../assets/images/google_icon.svg";
import fb from "./../../assets/images/facebook_icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginRegisterOpened, setUserData } from "../../store/Slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginAndRegisterPopup = ({ handleCloseClick }) => {
	const { registerInputValues, loginInputValues } = useSelector(state => state.auth);
	const { accessToken } = useSelector(state => state.auth.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [switchValue, setSwitchValue] = useState("login");
	const handleSwitch = e => {
		setSwitchValue(e.target.value);
	};
	const registerWithEmail = async e => {
		e.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				registerInputValues.email,
				registerInputValues.password,
			);
			const { displayName, email, photoURL, uid } = userCredential.user;
			dispatch(setUserData({ displayName, email, photoURL, uid }));
		} catch (error) {
			console.log(error);
		}
	};
	const loginWithEmail = async e => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				loginInputValues.email,
				loginInputValues.password,
			);
			const { displayName, email, photoURL, uid } = userCredential.user;
			dispatch(setUserData({ displayName, email, photoURL, uid }));
		} catch (error) {
			console.log(error);
		}
	};
	const loginWidthGoogle = async () => {
		try {
			const userCredential = await signInWithPopup(auth, provider);
			const { displayName, email, photoURL, accessToken, uid } = userCredential.user;
			dispatch(setUserData({ displayName, email, photoURL, accessToken, uid }));
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		if (accessToken) {
			navigate("/account");
			dispatch(setIsLoginRegisterOpened(false));
		}
	}, [accessToken]);

	return (
		<div className={style.wrapper}>
			<form
				className={style.container}
				onSubmit={switchValue === "login" ? loginWithEmail : registerWithEmail}
			>
				<div className={style.close}>
					<img onClick={handleCloseClick} src={close} alt='close' />
				</div>
				<div className={style.switch}>
					<button
						type='button'
						value='login'
						onClick={handleSwitch}
						className={switchValue === "login" ? style.active : ""}
					>
						Login
					</button>{" "}
					|
					<button
						type='button'
						value='register'
						onClick={handleSwitch}
						className={switchValue === "register" ? style.active : ""}
					>
						Register
					</button>
				</div>
				{switchValue === "login" ? <LoginForm /> : <RegisterForm />}
				<Button
					type='submit'
					text={switchValue === "login" ? "Login" : "Register"}
					classes={"loginRegister"}
				/>
				<p className={style.orLoginWidth}>
					Or {switchValue === "login" ? "login" : "register"} with
				</p>
				<Button
					type='button'
					onClick={loginWidthGoogle}
					img={google}
					text='Continue with Google'
					classes={"loginRegisterBtn"}
				/>
				<Button type='button' img={fb} text='Continue with Facebook' classes={"loginRegisterBtn"} />
			</form>
		</div>
	);
};

export default LoginAndRegisterPopup;

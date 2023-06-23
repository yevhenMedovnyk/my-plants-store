import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./loginAndRegisterPopup.module.scss";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Button from "../UI/Button/Button";

import close from "./../../assets/images/close.png";
import google from "./../../assets/images/google_icon.svg";
import fb from "./../../assets/images/facebook_icon.svg";

import { setIsLoginRegisterOpened } from "../../store/Slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { UserAuth } from "../../context/AuthContext";

const LoginAndRegisterPopup = ({ handleCloseClick }) => {
	const { registerInputValues, loginInputValues } = useSelector(state => state.auth);
	const { accessToken } = useSelector(state => state.auth.user);

	const { loginWidthGoogle, loginWithEmail, registerWithEmail, loginWidthFacebook } = UserAuth();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [switchValue, setSwitchValue] = useState("login");
	const handleSwitch = e => {
		setSwitchValue(e.target.value);
	};

	const handleEmailRegister = e => {
		e.preventDefault();
		registerWithEmail(registerInputValues.email, registerInputValues.password);
	};

	const handleEmailLogin = e => {
		e.preventDefault();
		loginWithEmail(loginInputValues.email, loginInputValues.password);
	};

	const handleGoogleLogin = () => {
		loginWidthGoogle();
	};
	const handleFacebookLogin = () => {
		loginWidthFacebook();
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
				onSubmit={switchValue === "login" ? handleEmailLogin : handleEmailRegister}
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
				<p className={style.orLoginWidth}>Or login with</p>
				<Button
					type='button'
					onClick={handleGoogleLogin}
					img={google}
					text='Continue with Google'
					classes={"loginRegisterBtn"}
				/>
				<Button
					onClick={handleFacebookLogin}
					type='button'
					img={fb}
					text='Continue with Facebook'
					classes={"loginRegisterBtn"}
				/>
			</form>
		</div>
	);
};

export default LoginAndRegisterPopup;

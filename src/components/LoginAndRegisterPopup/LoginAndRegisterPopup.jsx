import { useState } from "react";
import style from "./loginAndRegisterPopup.module.scss";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Button from "../UI/Button/Button";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import close from "./../../assets/images/close.png";
import google from "./../../assets/images/google_icon.svg";
import fb from "./../../assets/images/facebook_icon.svg";
import { useSelector } from "react-redux";

const LoginAndRegisterPopup = ({ handleCloseClick }) => {
	const { registerInputValues, loginInputValues } = useSelector(state => state.auth);

	const [switchValue, setSwitchValue] = useState("login");
	const handleSwitch = e => {
		setSwitchValue(e.target.value);
	};
	const handleRegister = async e => {
		e.preventDefault();
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				registerInputValues.email,
				registerInputValues.password,
			);
			const user = userCredential.user;
			console.log(user.email);
		} catch (error) {
			console.log(error);
		}
	};
	const handleLogin = async e => {
		e.preventDefault();
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				loginInputValues.email,
				loginInputValues.password,
			);
			const user = userCredential.user;
			console.log(user);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={style.wrapper}>
			<form className={style.container}>
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
					onClick={switchValue === "login" ? handleLogin : handleRegister}
				/>
				<p className={style.orLoginWidth}>
					Or {switchValue === "login" ? "login" : "register"} with
				</p>
				<Button img={google} text='Continue with Google' classes={"loginRegisterBtn"} />
				<Button img={fb} text='Continue with Facebook' classes={"loginRegisterBtn"} />
			</form>
		</div>
	);
};

export default LoginAndRegisterPopup;

import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./loginAndRegisterPopup.module.scss";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Button from "../UI/Button/Button";

import close from "./../../assets/images/close.png";
import google from "./../../assets/images/google_icon.svg";

import { setIsLoginRegisterOpened } from "../../store/Slices/authSlice";
import { useDispatch } from "react-redux";
import { UserAuth } from "../../context/AuthContext";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface ILoginAndRegisterPopup {
	handleCloseClick: () => void;
}



const LoginAndRegisterPopup: FC<ILoginAndRegisterPopup> = ({ handleCloseClick }) => {
	const { registerInputValues, loginInputValues } = useAppSelector(state => state.auth);
	const { uid } = useAppSelector(state => state.auth.user);



	const { loginWidthGoogle, loginWithEmail, registerWithEmail } = UserAuth();

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [switchValue, setSwitchValue] = useState<string>("login");
	const handleSwitch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setSwitchValue((e.target as HTMLButtonElement).value);
	};

	const handleEmailRegister = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		registerWithEmail(
			registerInputValues.email,
			registerInputValues.password,
			registerInputValues?.username,
		);
	};
	const handleEmailLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		loginWithEmail(loginInputValues.email, loginInputValues.password);
	};
	const handleGoogleLogin = async () => {
		await loginWidthGoogle();
	};

	useEffect(() => {
		if (uid) {
			navigate("/account");
			dispatch(setIsLoginRegisterOpened(false));
		}
	}, [uid]);

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
			</form>
		</div>
	);
};

export default LoginAndRegisterPopup;

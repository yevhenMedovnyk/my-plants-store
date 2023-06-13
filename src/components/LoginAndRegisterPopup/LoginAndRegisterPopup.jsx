import { useState } from "react";
import style from "./loginAndRegisterPopup.module.scss";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import Button from "../UI/Button/Button";

import close from "./../../assets/images/close.png";
import google from "./../../assets/images/google_icon.svg";
import fb from "./../../assets/images/facebook_icon.svg";

const LoginAndRegisterPopup = ({handleCloseClick}) => {
	const [switchValue, setSwitchValue] = useState("login");
	const handleSwitch = e => {
		setSwitchValue(e.target.value);
	};
	

	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<div className={style.close} >
					<img onClick={handleCloseClick} src={close} alt='close' />
				</div>
				<div className={style.switch}>
					<button
						value='login'
						onClick={handleSwitch}
						className={switchValue === "login" ? style.active : ""}
					>
						Login
					</button>{" "}
					|
					<button
						value='register'
						onClick={handleSwitch}
						className={switchValue === "register" ? style.active : ""}
					>
						Register
					</button>
				</div>
				{switchValue === "login" ? <LoginForm /> : <RegisterForm />}
				<Button img={google} text='Continue with Google' classes={"loginRegisterBtn"} />
				<Button img={fb} text='Continue with Facebook' classes={"loginRegisterBtn"} />
			</div>
		</div>
	);
};

export default LoginAndRegisterPopup;

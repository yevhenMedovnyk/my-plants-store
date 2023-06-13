import { useState } from "react";
import style from "./loginForm.module.scss";
import FormInput from "../Shared/FormInput/FormInput";
import Button from "../UI/Button/Button";

const inputs = [
	{
		id: 1,
		name: "email",
		placeholder: "Enter your email",
		type: "email",
		errorMessage: "It should be a valid email address!",
		required: true,
	},
	{
		id: 2,
		name: "password",
		placeholder: "Enter your password",
		type: "password",
		errorMessage: "Password should be 8-16 characters and shouldn't include any special symbols",
		pattern: "^[A-Za-z0-9]{8,16}",
		required: true,
	},
];

const LoginForm = () => {
	const [inputValues, setInputValues] = useState({
		username: "",
		password: "",
	});

	const handleInputChange = e => {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	};
	

	return (
		<>
			<form className={style.wrapper}>
				<p className={style.title}>Enter your email and password to login.</p>
				<div className={style.inputs}>
					{inputs.map(input => (
						<FormInput
							key={input.id}
							{...input}
							value={inputValues[input.name]}
							onChange={handleInputChange}
						/>
					))}
				</div>
				<Button text='Login' classes={"loginRegister"} />
			</form>
			<p className={style.orLoginWidth}>Or login with</p>
		</>
	);
};

export default LoginForm;

import { useState } from "react";
import style from "./registerForm.module.scss";
import FormInput from "../Shared/FormInput/FormInput";
import Button from "../UI/Button/Button";

const RegisterForm = () => {
	const [inputValues, setInputValues] = useState({
		username: "",
		password: "",
		confirmPassword: "",
	});

	const handleInputChange = e => {
		setInputValues({ ...inputValues, [e.target.name]: e.target.value });
	};
	const inputs = [
		{
			id: 1,
			name: "username",
			placeholder: "Username",
			type: "text",
			errorMessage: "This field is required",
			required: true,
		},
		{
			id: 2,
			name: "email",
			placeholder: "Enter your email address",
			type: "email",
			errorMessage: "It should be a valid email address!",
			required: true,
		},
		{
			id: 3,
			name: "password",
			placeholder: "Password",
			type: "password",
			errorMessage: "Password should be 8-16 characters and shouldn't include any special symbols",
			pattern: "^[A-Za-z0-9]{8,16}",
			required: true,
		},
		{
			id: 4,
			name: "confirmPassword",
			placeholder: "Confirm Password",
			type: "password",
			errorMessage: "Passwords do NOT match",
			pattern: inputValues.password,
			required: true,
		},
	];

	return (
		<>
			<form className={style.wrapper}>
				<p className={style.title}>Enter your email and password to register.</p>
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
			<p className={style.orLoginWidth}>Or register with</p>
		</>
	);
};

export default RegisterForm;

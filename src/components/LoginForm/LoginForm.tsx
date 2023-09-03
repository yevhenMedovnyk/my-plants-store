import style from "./loginForm.module.scss";
import FormInput from "../Shared/FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { setLoginInputValues } from "../../store/Slices/authSlice";
import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

type LoginInputs = {
	id: number;
	name: string;
	placeholder: string;
	type: string;
	errorMessage?: string;
	required?: boolean;
	pattern?: string;
};

const inputs: LoginInputs[] = [
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

const LoginForm: FC = () => {
	const dispatch = useDispatch();
	const { loginInputValues } = useAppSelector(state => state.auth);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setLoginInputValues({ [e.target.name]: e.target.value }));
	};

	return (
		<>
			<div className={style.wrapper}>
				<p className={style.title}>Enter your email and password to login.</p>
				<div className={style.inputs}>
					{inputs.map(input => (
						<FormInput
							key={input.id}
							{...input}
							value={loginInputValues[input.name]}
							onChange={handleInputChange}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default LoginForm;

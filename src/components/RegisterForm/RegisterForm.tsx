import style from "./registerForm.module.scss";
import FormInput from "../Shared/FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { setRegisterInputValues } from "../../store/Slices/authSlice";
import { useAppSelector } from "../../hooks/redux";

interface IRegisterFormInputs {
	id: number;
	name: string;
	placeholder: string;
	type: string;
	errorMessage: string;
	required?: boolean;
	confirmPassword?: string;
	pattern?: string;
}

const RegisterForm = () => {
	const dispatch = useDispatch();
	const { registerInputValues } = useAppSelector(state => state.auth);
	const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		dispatch(setRegisterInputValues({ [e.target.name]: e.target.value }));
	};
	const inputs: IRegisterFormInputs[] = [
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
			pattern: registerInputValues.password,
			required: true,
		},
	];

	return (
		<>
			<div className={style.wrapper}>
				<p className={style.title}>Enter your email and password to register.</p>
				<div className={style.inputs}>
					{inputs.map(input => (
						<FormInput
							key={input.id}
							{...input}
							value={registerInputValues[input.name]}
							onChange={handleInputChange}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default RegisterForm;

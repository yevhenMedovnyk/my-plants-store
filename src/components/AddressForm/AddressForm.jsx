import style from "./addressForm.module.scss";
import FormInput from "../Shared/FormInput/FormInput";
import { useDispatch, useSelector } from "react-redux";
import { setInputValues } from "../../store/Slices/cartSlice";

const inputs = [
	{
		id: 1,
		name: "firstName",
		type: "text",
		errorMessage: "Please enter your first name",
		pattern: "[a-zA-Z]+",
		required: true,
		label: "First Name",
	},
	{
		id: 2,
		name: "lastName",
		type: "text",
		errorMessage: "Please enter your last name",
		pattern: "[a-zA-Z]+",
		required: true,
		label: "Last Name",
	},
	{
		id: 3,
		name: "country",
		type: "text",
		errorMessage: "This field is required",
		required: true,
		label: "Country / Region",
	},
	{
		id: 4,
		name: "city",
		type: "text",
		errorMessage: "This field is required",
		required: true,
		label: "Town / City",
	},
	{
		id: 5,
		name: "street",
		type: "text",
		placeholder: "House number and street name",
		errorMessage: "This field is required",
		required: true,
		label: "Street Address",
	},
	{
		id: 6,
		name: "apartment",
		type: "text",
		placeholder: "Apartment, suite, unit, etc. (optional)",
		required: false,
		label: "Apartment",
	},
	{
		id: 7,
		name: "state",
		type: "text",
		placeholder: "Enter a state",
		errorMessage: "This field is required",
		required: true,
		label: "State",
	},

	{
		id: 8,
		name: "zip",
		type: "text",
		placeholder: null,
		errorMessage: "Only numbers",
		pattern: "[0-9]",
		required: true,
		label: "ZIP",
	},
	{
		id: 9,
		name: "email",
		placeholder: "Enter your email",
		type: "email",
		errorMessage: "It should be a valid email address!",
		required: true,
		label: "Email address",
	},
	{
		id: 10,
		name: "phone",
		type: "tel",
		placeholder: null,
		errorMessage: "This field is required",
		pattern: "^[0-9,-,+]{9,15}$",
		required: true,
		label: "Phone Number",
	},
];

const AddressForm = () => {
	const dispatch = useDispatch();
	const { inputValues } = useSelector(state => state.cart);

	const handleInputChange = e => {
		dispatch(setInputValues({ [e.target.name]: e.target.value }));
	};

	return (
		<div className={style.address}>
			<h2>Billing Address</h2>
			<div className={style.inputs}>
				{inputs.map(input => (
					<FormInput
						key={input.id}
						{...input}
						value={inputValues[input.name]}
						onChange={handleInputChange}
					/>
				))}
				<div className={style.textarea}>
					<label htmlFor='textarea'>Order notes (optional)</label>
					<textarea
						id='textarea'
						name='notes'
						value={inputValues.notes}
						onChange={handleInputChange}
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default AddressForm;

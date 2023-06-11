import axios from "axios";
import AddressForm from "../../components/AddressForm/AddressForm";
import YourOrder from "../../components/YourOrder/YourOrder";
import style from "./checkoutPage.module.scss";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
	const { cart, inputValues, totalSum } = useSelector(state => state.cart);

	const handleSubmit = async e => {
		e.preventDefault();
		//	console.log(e.target.validity.patternMismatch);
		await axios
			.post("https://plants-api-dkpe.onrender.com/orders", {
				id: Math.floor(Math.random()) * 10,
				cart,
				inputValues,
				totalSum,
			})
			.catch(error => console.log(error));
	};

	return (
		<form className={style.wrapper} onSubmit={handleSubmit}>
			<AddressForm />
			<div className={style.orders}>
				<YourOrder />
			</div>
		</form>
	);
};

export default CheckoutPage;

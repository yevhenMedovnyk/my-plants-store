import AddressForm from "../../components/AddressForm/AddressForm";
import YourOrder from "../../components/YourOrder/YourOrder";
import style from "./checkoutPage.module.scss";

const CheckoutPage = () => {
	return (
		<form className={style.wrapper}>
			<AddressForm />
			<div className={style.orders}>
				<YourOrder />
			</div>
		</form>
	);
};

export default CheckoutPage;

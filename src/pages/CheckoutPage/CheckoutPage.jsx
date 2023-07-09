import axios from "axios";
import AddressForm from "../../components/AddressForm/AddressForm";
import YourOrder from "../../components/YourOrder/YourOrder";
import style from "./checkoutPage.module.scss";
import { useSelector } from "react-redux";
import OrderCompletedPopup from "../../components/OrderCompletedPopup/OrderCompletedPopup";
import { useState } from "react";
import { COUPONS_URL, ORDERS_URL } from "../../constants/URLs";

const CheckoutPage = () => {
	const { cart, inputValues, totalSum, couponData } = useSelector(state => state.cart);
	const { user } = useSelector(state => state.auth);
	const [isOrderCompleted, setIsOrderCompleted] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		//	console.log(e.target.validity.patternMismatch);
		try {
			await axios.post(ORDERS_URL, {
				//id: Math.floor(Math.random()) * 10,
				plants: cart,
				address: inputValues,
				sum: totalSum.toFixed(2),
				user: user,
				time: new Date(),
			});
			setIsOrderCompleted(true);
			if (couponData.length) {
				await axios.patch(`${COUPONS_URL}/${couponData[0]?.id}`, {
					count: couponData[0]?.count - 1,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{isOrderCompleted && <OrderCompletedPopup />}
			<form className={style.wrapper} onSubmit={handleSubmit}>
				<AddressForm />
				<div className={style.orders}>
					<YourOrder setIsOrderCompleted={setIsOrderCompleted} />
				</div>
			</form>
		</>
	);
};

export default CheckoutPage;

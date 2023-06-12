import { useDispatch, useSelector } from "react-redux";
import style from "./paymentMethodCheck.module.scss";
import { setPaymentMethod } from "../../store/Slices/cartSlice";

const PaymentMethodCheck = ({ label, id }) => {
	const dispatch = useDispatch();
	const { paymentMethod } = useSelector(state => state.cart);

	return (
		<div className={style.wrapper}>
			<input
				id={id}
				type='checkbox'
				checked={id === paymentMethod}
				onChange={e => dispatch(setPaymentMethod(e.target.id))}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
};

export default PaymentMethodCheck;

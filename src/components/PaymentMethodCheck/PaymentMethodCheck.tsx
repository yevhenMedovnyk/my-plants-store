import { useDispatch, useSelector } from "react-redux";
import style from "./paymentMethodCheck.module.scss";
import { setPaymentMethod } from "../../store/Slices/cartSlice";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

interface PaymentMethodCheckProps {
	label: string | React.ReactNode;
	id: string;
}

const PaymentMethodCheck: FC<PaymentMethodCheckProps> = ({ label, id }) => {
	const dispatch = useAppDispatch();
	const { paymentMethod } = useAppSelector(state => state.cart);

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

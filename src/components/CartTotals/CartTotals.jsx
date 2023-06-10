import { useEffect, useState } from "react";
import style from "./cartTotals.module.scss";

import Input from "../Shared/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { setCoupon, setSubTotalSum, setTotalSum } from "../../store/Slices/cartSlice";

const CartTotals = () => {
	const dispatch = useDispatch();
	const [discount, setDiscount] = useState(0);
	const { cart, subTotalSum, totalSum, coupon } = useSelector(state => state.cart);

	const onInputChange = e => {
		dispatch(setCoupon(e.target.value));
	};
	const calculateTotalSum = () => {
		if (coupon === "Yevhen") {
			setDiscount((subTotalSum / 100) * 20);
			dispatch(setTotalSum(subTotalSum - discount));
		} else {
			dispatch(setTotalSum(subTotalSum));
			setDiscount(0);
		}
	};

	useEffect(() => {
		dispatch(setSubTotalSum());
		calculateTotalSum();
	}, [coupon, cart, discount, subTotalSum]);
	return (
		<div className={style.wrapper}>
			<div className={style.totalsTitleContainer}>
				<h3>Cart Totals</h3>
			</div>
			<div className={style.coupon}>
				<span>Coupon Apply</span>
				<Input
					placeholder='Enter coupon code here...'
					text='Apply'
					type='text'
					classes='cartInput'
					onChange={onInputChange}
					value={coupon}
				/>
			</div>
			<div className={style.subTotal}>
				<p>Subtotal</p>
				<span>${subTotalSum.toFixed(2)}</span>
			</div>
			<div className={style.discount}>
				<p>Coupon Discount</p>
				<span>(-) {discount.toFixed(2)}</span>
			</div>
			<div className={style.total}>
				<p>Total</p>
				<span>${totalSum.toFixed(2)}</span>
			</div>
		</div>
	);
};

export default CartTotals;

import { FC, useEffect, useState } from "react";
import style from "./cartTotals.module.scss";

import Input from "../Shared/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
	setInputCoupon,
	setCouponData,
	setSubTotalSum,
	setTotalSum,
} from "../../store/Slices/cartSlice";
import axios from "axios";
import { COUPONS_URL } from "../../constants/URLs";
import { useDebounce } from "../../helpers/useDebounce";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const CartTotals: FC = () => {
	const dispatch = useAppDispatch();
	const { cart, subTotalSum, totalSum, inputCoupon, couponData } = useAppSelector(
		state => state.cart,
	);
	const [discount, setDiscount] = useState<number>(0);
	const onInputChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		dispatch(setInputCoupon(e.target.value));
	};

	const debouncedValue = useDebounce(inputCoupon, 900);
	const fetchCouponData = async () => {
		const res = await axios.get(`${COUPONS_URL}?name=${debouncedValue}`);
		dispatch(setCouponData(res.data));
	};
	const calculateTotalSum = () => {
		if (couponData[0]?.name === debouncedValue && couponData[0].count > 0) {
			setDiscount((subTotalSum / 100) * couponData[0]?.discount);
			dispatch(setTotalSum(subTotalSum - discount));
		} else {
			dispatch(setTotalSum(subTotalSum));
			setDiscount(0);
		}
	};

	useEffect(() => {
		fetchCouponData();
		dispatch(setSubTotalSum());
		calculateTotalSum();
	}, [debouncedValue, cart, discount, subTotalSum, dispatch, couponData[0]?.name]);
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
					value={inputCoupon}
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

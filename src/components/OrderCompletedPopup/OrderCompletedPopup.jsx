import { useDispatch, useSelector } from "react-redux";
import ProductsInOrder from "../ProductsInOrder/ProductsInOrder";
import style from "./orderCompletedPopup.module.scss";
import Button from "../UI/Button/Button";

import thankImg from "./../../assets/images/thank_you.png";
import { clearCart, clearInputValues, setInputCoupon } from "../../store/Slices/cartSlice";
import { useNavigate } from "react-router-dom";

const OrderCompletedPopup = () => {
	const { totalSum } = useSelector(state => state.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleClearCart = () => {
		dispatch(clearCart());
		navigate("/");
		dispatch(clearInputValues());
		dispatch(setInputCoupon(""));
	};

	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<div className={style.header}>
					<div className={style.headerTop}>
						<img src={thankImg} alt='thank you' />
						<p>Your order has been received</p>
					</div>
					<div className={style.headerBottom}>
						<div className={style.headerBottom__item}>
							<p></p>
							<span></span>
						</div>
					</div>
				</div>
				<div className={style.orderDetails}>
					<p className={style.title}>Order Details</p>
					<ProductsInOrder />
					<div className={style.total}>
						<p>Total</p>
						<span>${totalSum.toFixed(2)}</span>
					</div>
				</div>
				<p className={style.info}>
					Your order is currently being processed. You will receive an order confirmation email
					shortly with the expected delivery date for your items.
				</p>
				<div className={style.button}>
					<Button text='Home Page' onClick={handleClearCart} />
				</div>
			</div>
		</div>
	);
};

export default OrderCompletedPopup;

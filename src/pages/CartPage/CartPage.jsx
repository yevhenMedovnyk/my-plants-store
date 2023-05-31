import CartItem from "../../components/CartItem/CartItem";
import style from "./cartPage.module.scss";

import Input from "../../components/Shared/Input/Input";
import Button from "../../components/UI/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartPage = () => {
	const { cart } = useSelector(state => state.cart);

	return (
		<div className={style.cart}>
			<div className={style.products}>
				<div className={style.titleContainer}>
					<h2 className={style.title}>Products</h2>
				</div>
				<div className={style.container}>
					{cart.map(item => (
						<CartItem key={item.id} {...item} />
					))}
				</div>
			</div>
			<div className={style.totals}>
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
					/>
				</div>
				<div className={style.subTotal}>
					<p>Subtotal</p>
					<span>$2,683.00</span>
				</div>
				<div className={style.discount}>
					<p>Coupon Discount</p>
					<span>(-) 00.00</span>
				</div>
				<div className={style.shipping}>
					<p>Shiping</p>
					<span>$16.00</span>
				</div>
				<div className={style.total}>
					<p>Total</p>
					<span>$2,699.00</span>
				</div>
				<Button text='Proceed To Checkout' classes='cartTotal' />
				<Link className={style.continue} to='/'>
					Continue Shopping
				</Link>
			</div>
		</div>
	);
};

export default CartPage;

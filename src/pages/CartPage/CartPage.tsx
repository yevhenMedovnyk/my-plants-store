import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./cartPage.module.scss";

import CartItem from "../../components/CartItem/CartItem";
import Button from "../../components/UI/Button/Button";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import CartTotals from "../../components/CartTotals/CartTotals";
import { useAppSelector } from "../../hooks/redux";

const CartPage = () => {
	const { cart } = useAppSelector(state => state.cart);

	return (
		<>
			{cart.length > 0 ? (
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
						<CartTotals />
						<Link to='/cart/checkout'>
							<Button text='Proceed To Checkout' classes='cartTotal' />
						</Link>
						<Link className={style.continue} to='/'>
							Continue Shopping
						</Link>
					</div>
				</div>
			) : (
				<EmptyCart />
			)}
		</>
	);
};

export default CartPage;

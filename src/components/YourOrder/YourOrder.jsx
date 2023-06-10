import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import style from "./yourOrder.module.scss";
import CartTotals from "../CartTotals/CartTotals";
import Button from "../UI/Button/Button";

const YourOrder = () => {
	const { cart } = useSelector(state => state.cart);
	const handleSubmit = () => {

	};

	return (
		<div className={style.wrapper}>
			<h2 className={style.ordersTitle}>Your Order</h2>
			<div className={style.orders}>
				<div className={style.products}>
					<div className={style.titleContainer}>
						<h3 className={style.title}>Products</h3>
						<h3 className={style.title}>Subtotal</h3>
					</div>
					<div className={style.container}>
						{cart.map(item => (
							<CartItem key={item.id} {...item} classes='checkout' />
						))}
					</div>
				</div>
				<CartTotals />
				<Button text='Place Order' classes='cartTotal' />
			</div>
		</div>
	);
};

export default YourOrder;

import style from "./yourOrder.module.scss";
import CartTotals from "../CartTotals/CartTotals";
import Button from "../UI/Button/Button";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import ProductsInOrder from "../ProductsInOrder/ProductsInOrder";
import { FC } from "react";

const YourOrder: FC = () => {
	return (
		<div className={style.wrapper}>
			<h2 className={style.ordersTitle}>Your Order</h2>
			<div className={style.orders}>
				<ProductsInOrder />
				<div className={style.containerBottom}>
					<CartTotals />
					<PaymentMethod />
					<Button text='Place Order' classes='cartTotal' />
				</div>
			</div>
		</div>
	);
};

export default YourOrder;

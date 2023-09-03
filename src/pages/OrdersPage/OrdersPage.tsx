import { useEffect } from "react";
import Order from "../../components/Order/Order";
import style from "./ordersPage.module.scss";
import { fetchOrders } from "../../store/Slices/ordersSlice";
import { ORDERS_URL } from "../../constants/URLs";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

const OrdersPage = () => {
	const { orders } = useAppSelector(state => state.orders);
	const { email } = useAppSelector(state => state.auth.user);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchOrders(`${ORDERS_URL}?user.email=${email}`));
	}, []);

	return (
		<div className={style.wrapper}>
			{orders.map(order => (
				<Order key={order.id} {...order} />
			))}
		</div>
	);
};

export default OrdersPage;

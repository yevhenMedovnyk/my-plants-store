import { useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import style from "./productsInOrder.module.scss";

const ProductsInOrder = () => {
	const { cart } = useSelector(state => state.cart);

	return (
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
	);
};

export default ProductsInOrder;

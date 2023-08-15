import { useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import style from "./cartItem.module.scss";
import { decrementCounter, incrementCounter, removeFromCart } from "../../store/Slices/cartSlice";

const CartItem = ({ image_link, plant_name, price, count, id, classes }) => {
	const dispatch = useDispatch();

	const handlePlusClick = () => {
		dispatch(incrementCounter(id));
	};
	const handleMinusClick = () => {
		dispatch(decrementCounter(id));
	};
	const removeItem = () => {
		dispatch(removeFromCart(id));
	};
	const totalSum = price * count;



	return (
		<div className={[style.wrapper, classes].join(" ")}>
			<div className={style.image}>
				<img src={image_link} alt={plant_name} />
			</div>
			<div className={style.text}>
				<h2 className={style.title}>{plant_name}</h2>
			</div>
			<span className={style.price}>${price}</span>
			<div className={style.checkoutQuantity}>(x {count})</div>
			<div className={style.quantity}>
				<Button text='-' classes='plusMinusCart' type='button' onClick={handleMinusClick} />
				<span>{count}</span>
				<Button text='+' classes='plusMinusCart' type='button' onClick={handlePlusClick} />
			</div>
			<span className={style.total}>${totalSum.toFixed(2)}</span>
			<div className={style.removeIcon} onClick={removeItem}>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M18.8892 9.55408C18.8892 17.5731 20.0435 21.1979 12.2797 21.1979C4.5149 21.1979 5.693 17.5731 5.693 9.55408'
						stroke='#727272'
					/>
					<path d='M20.3651 6.47979H4.2146' stroke='#727272' />
					<path
						d='M15.7148 6.47979C15.7148 6.47979 16.2434 2.71408 12.2891 2.71408C8.33578 2.71408 8.86435 6.47979 8.86435 6.47979'
						stroke='#727272'
					/>
				</svg>
			</div>
		</div>
	);
};

export default CartItem;

import style from "./emptyCart.module.scss";
import cartImg from "./../../assets/images/empty-cart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.image}>
				<img src={cartImg} alt='empty cart' />
			</div>
			<h1>Your Cart Is Empty!</h1>
			<Link to="/">Go Home</Link>
		</div>
	);
};

export default EmptyCart;

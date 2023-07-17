import { NavLink } from "react-router-dom";
import style from "./menu.module.scss";

const Menu = ({isBurgerOpened}) => {
	return (
		<nav className={[style.menu, isBurgerOpened ? style.active : ""].join(" ")}>
			<ul>
				<li className={style.link}>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li className={style.link}>
					<NavLink to='/plantCare'>Plant Care</NavLink>
				</li>
				<li className={[style.link, style.cartLink].join(" ")}>
					<NavLink to='/cart'>Shopping cart</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

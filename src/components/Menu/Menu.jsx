import { NavLink } from "react-router-dom";
import style from "./menu.module.scss";

const Menu = () => {
	return (
		<nav className={style.menu}>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/plantCare'>Plant Care</NavLink>
				</li>
				<li>
					<NavLink to='/blogs'>Blogs</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

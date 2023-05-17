import { NavLink } from "react-router-dom";
import style from "./menu.module.scss";

export default function Menu() {
	return (
		<nav className={style.menu}>
			<ul>
				<NavLink to='/'>
					<li>Home</li>
				</NavLink>
				<NavLink to='/shope'>
					<li>Shop</li>
				</NavLink>
				<NavLink to='/plantCare'>
					<li>Plant Care</li>
				</NavLink>
				<NavLink to='/blogs'>
					<li>Blogs</li>
				</NavLink>
			</ul>
		</nav>
	);
}

import { NavLink } from "react-router-dom";
import style from "./menu.module.scss";
import { FC } from "react";

interface IMenu {
	onClickSearchIcon: () => void;
	isBurgerOpened: boolean;
	setIsBurgerOpened: (isBurgerOpened: boolean) => void;
	menuRef: any;
}

const Menu: FC<IMenu> = ({ isBurgerOpened, setIsBurgerOpened, menuRef }) => {
	return (
		<nav ref={menuRef} className={[style.menu, isBurgerOpened ? style.active : ""].join(" ")}>
			<ul>
				<li onClick={() => setIsBurgerOpened(false)} className={style.link}>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li
					onClick={() => setIsBurgerOpened(false)}
					className={[style.link, style.cartLink].join(" ")}
				>
					<NavLink to='/cart'>Shopping cart</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

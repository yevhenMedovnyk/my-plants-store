import Menu from "../Menu/Menu";
import Logo from "../UI/Logo/Logo";
import style from "./header.module.scss";

import searchIcon from "./../../assets/images/searchIcon.svg";
import cartIcon from "./../../assets/images/cartIcon.svg";

function Header() {
	return (
		<header className={style.header}>
			<Logo />
			<Menu />
			<div className={style.rightBlock}>
				<img className={style.searchIcon} src={searchIcon} alt='search' />
				<div className={style.cartIcon}>
					<img src={cartIcon} alt='cart' />
					<span>0</span>
				</div>
				<button className={style.loginBtn}>Login</button>
			</div>
		</header>
	);
}

export default Header;
